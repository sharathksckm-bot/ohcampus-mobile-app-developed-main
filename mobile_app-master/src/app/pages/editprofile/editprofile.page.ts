import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController, LoadingController, MenuController, ModalController, ToastController, IonModal } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopuplogsignPage } from '../popuplogsign/popuplogsign.page';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  // Location in Basic Info
  currentState: string;
  currentStateName: string;
  currentCity: string;
  currentCityName: string;
  // Education
  currentEducation: string;
  institutionName: string;
  board: string;
  universityName: string;
  collegeName: string;
  specialization: string;
  passingYear: string;
  percentage: string;
  stream: string;
  // Preferences
  preferredCourse: string;
  preferredState: string;
  preferredStateName: string;
  preferredCity: string;
  preferredCityName: string;
  budgetRange: string;
  entranceExams: string[];
  entranceExamNames: string[];
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  @ViewChild('stateModal') stateModal!: IonModal;
  @ViewChild('cityModal') cityModal!: IonModal;
  @ViewChild('basicStateModal') basicStateModal!: IonModal;
  @ViewChild('basicCityModal') basicCityModal!: IonModal;
  @ViewChild('examsModal') examsModal!: IonModal;

  loginuserId: any;
  username: any;
  email: any;
  userData: any;
  firstName: any;
  responseData: any;
  phone: any;
  token: any;
  
  // Profile management
  isEditMode: boolean = false;
  profileImage: string = '';
  maxDate: string;
  passingYears: number[] = [];
  
  // Dropdown data from database
  statesList: any[] = [];
  filteredStatesList: any[] = [];
  citiesList: any[] = [];
  filteredCitiesList: any[] = [];
  basicCitiesList: any[] = [];
  filteredBasicCitiesList: any[] = [];
  examsList: any[] = [];
  filteredExamsList: any[] = [];
  selectedExams: any[] = [];
  tempSelectedExams: any[] = []; // Temporary selection before confirmation
  
  isLoadingStates: boolean = false;
  isLoadingCities: boolean = false;
  isLoadingBasicCities: boolean = false;
  isLoadingExams: boolean = false;
  
  // Search terms
  stateSearchTerm: string = '';
  citySearchTerm: string = '';
  basicStateSearchTerm: string = '';
  basicCitySearchTerm: string = '';
  examSearchTerm: string = '';
  
  // Modal type tracker
  currentModalType: string = '';
  
  profileData: ProfileData = {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    currentState: '',
    currentStateName: '',
    currentCity: '',
    currentCityName: '',
    currentEducation: '',
    institutionName: '',
    board: '',
    universityName: '',
    collegeName: '',
    specialization: '',
    passingYear: '',
    percentage: '',
    stream: '',
    preferredCourse: '',
    preferredState: '',
    preferredStateName: '',
    preferredCity: '',
    preferredCityName: '',
    budgetRange: '',
    entranceExams: [],
    entranceExamNames: []
  };

  constructor(
    public service: ServiceService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private googlePlus: GooglePlus,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    // Set max date for DOB (must be at least 10 years old)
    const today = new Date();
    today.setFullYear(today.getFullYear() - 10);
    this.maxDate = today.toISOString();
    
    // Generate passing years (last 10 years + next 5 years)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear + 5; i >= currentYear - 10; i--) {
      this.passingYears.push(i);
    }
  }

  ngOnInit() {
    this.loadUserData();
    this.loadProfileData();
    this.loadStates();
    this.loadExams();
  }

  ionViewWillEnter() {
    this.loadUserData();
    this.loadProfileData();
    if (this.statesList.length === 0) {
      this.loadStates();
    }
    if (this.examsList.length === 0) {
      this.loadExams();
    }
  }

  // Check if education level requires board field
  isSchoolLevel(): boolean {
    return this.profileData.currentEducation === '10th' || 
           this.profileData.currentEducation === '12th';
  }

  // Check if education level requires university/college fields
  isHigherEducation(): boolean {
    return this.profileData.currentEducation === 'undergraduate' || 
           this.profileData.currentEducation === 'graduate' || 
           this.profileData.currentEducation === 'postgraduate' ||
           this.profileData.currentEducation === 'diploma';
  }

  // Load states from database
  loadStates() {
    this.isLoadingStates = true;
    this.service.statelist().subscribe(
      (response: any) => {
        this.isLoadingStates = false;
        console.log('States API response:', response);
        
        // Handle different response formats
        if (response && response.state) {
          this.statesList = response.state;
        } else if (response && response.states) {
          this.statesList = response.states;
        } else if (response && response.data) {
          this.statesList = response.data;
        } else if (Array.isArray(response)) {
          this.statesList = response;
        } else {
          this.loadMockStates();
          return;
        }
        
        this.filteredStatesList = [...this.statesList];
        console.log('States loaded:', this.statesList.length);
        
        // If user has a preferred state, load cities for that state
        if (this.profileData.preferredState) {
          this.onStateChange(this.profileData.preferredState, 'preferred');
        }
        if (this.profileData.currentState) {
          this.onStateChange(this.profileData.currentState, 'basic');
        }
      },
      (error) => {
        this.isLoadingStates = false;
        console.error('Error loading states:', error);
        this.loadMockStates();
      }
    );
  }

  loadMockStates() {
    this.statesList = [
      { id: '1', statename: 'Andhra Pradesh' },
      { id: '2', statename: 'Arunachal Pradesh' },
      { id: '3', statename: 'Assam' },
      { id: '4', statename: 'Bihar' },
      { id: '5', statename: 'Chhattisgarh' },
      { id: '6', statename: 'Delhi' },
      { id: '7', statename: 'Goa' },
      { id: '8', statename: 'Gujarat' },
      { id: '9', statename: 'Haryana' },
      { id: '10', statename: 'Himachal Pradesh' },
      { id: '11', statename: 'Jharkhand' },
      { id: '12', statename: 'Karnataka' },
      { id: '13', statename: 'Kerala' },
      { id: '14', statename: 'Madhya Pradesh' },
      { id: '15', statename: 'Maharashtra' },
      { id: '16', statename: 'Manipur' },
      { id: '17', statename: 'Meghalaya' },
      { id: '18', statename: 'Mizoram' },
      { id: '19', statename: 'Nagaland' },
      { id: '20', statename: 'Odisha' },
      { id: '21', statename: 'Punjab' },
      { id: '22', statename: 'Rajasthan' },
      { id: '23', statename: 'Sikkim' },
      { id: '24', statename: 'Tamil Nadu' },
      { id: '25', statename: 'Telangana' },
      { id: '26', statename: 'Tripura' },
      { id: '27', statename: 'Uttar Pradesh' },
      { id: '28', statename: 'Uttarakhand' },
      { id: '29', statename: 'West Bengal' }
    ];
    this.filteredStatesList = [...this.statesList];
  }

  // Load cities based on selected state
  onStateChange(stateId: any, type: string = 'preferred') {
    if (!stateId) {
      if (type === 'basic') {
        this.basicCitiesList = [];
        this.filteredBasicCitiesList = [];
      } else {
        this.citiesList = [];
        this.filteredCitiesList = [];
      }
      return;
    }
    
    if (type === 'basic') {
      this.isLoadingBasicCities = true;
      this.profileData.currentCity = '';
      this.profileData.currentCityName = '';
    } else {
      this.isLoadingCities = true;
      this.profileData.preferredCity = '';
      this.profileData.preferredCityName = '';
    }
    
    this.service.citylist(stateId).subscribe(
      (response: any) => {
        if (type === 'basic') {
          this.isLoadingBasicCities = false;
        } else {
          this.isLoadingCities = false;
        }
        console.log('Cities API response:', response);
        
        let cities: any[] = [];
        // Handle different response formats
        if (response && response.city) {
          cities = response.city;
        } else if (response && response.cities) {
          cities = response.cities;
        } else if (response && response.data) {
          cities = response.data;
        } else if (Array.isArray(response)) {
          cities = response;
        } else {
          this.loadMockCities(stateId, type);
          return;
        }
        
        if (type === 'basic') {
          this.basicCitiesList = cities;
          this.filteredBasicCitiesList = [...cities];
        } else {
          this.citiesList = cities;
          this.filteredCitiesList = [...cities];
        }
        console.log('Cities loaded:', cities.length);
      },
      (error) => {
        if (type === 'basic') {
          this.isLoadingBasicCities = false;
        } else {
          this.isLoadingCities = false;
        }
        console.error('Error loading cities:', error);
        this.loadMockCities(stateId, type);
      }
    );
  }

  loadMockCities(stateId: string, type: string = 'preferred') {
    // Mock cities based on state
    const mockCitiesByState: any = {
      '12': [ // Karnataka
        { id: '1', cityname: 'Bangalore' },
        { id: '2', cityname: 'Mysore' },
        { id: '3', cityname: 'Mangalore' },
        { id: '4', cityname: 'Hubli' },
        { id: '5', cityname: 'Belgaum' },
        { id: '6', cityname: 'Dharwad' }
      ],
      '15': [ // Maharashtra
        { id: '7', cityname: 'Mumbai' },
        { id: '8', cityname: 'Pune' },
        { id: '9', cityname: 'Nagpur' },
        { id: '10', cityname: 'Nashik' },
        { id: '11', cityname: 'Aurangabad' }
      ],
      '24': [ // Tamil Nadu
        { id: '12', cityname: 'Chennai' },
        { id: '13', cityname: 'Coimbatore' },
        { id: '14', cityname: 'Madurai' },
        { id: '15', cityname: 'Tiruchirappalli' }
      ],
      '6': [ // Delhi
        { id: '16', cityname: 'New Delhi' },
        { id: '17', cityname: 'North Delhi' },
        { id: '18', cityname: 'South Delhi' }
      ]
    };
    
    const cities = mockCitiesByState[stateId] || [
      { id: '100', cityname: 'City 1' },
      { id: '101', cityname: 'City 2' },
      { id: '102', cityname: 'City 3' }
    ];
    
    if (type === 'basic') {
      this.basicCitiesList = cities;
      this.filteredBasicCitiesList = [...cities];
    } else {
      this.citiesList = cities;
      this.filteredCitiesList = [...cities];
    }
  }

  // Load exams from database
  loadExams() {
    this.isLoadingExams = true;
    
    const params = {};
    this.service.getexamlist(params).subscribe(
      (response: any) => {
        this.isLoadingExams = false;
        console.log('Exams API response:', response);
        
        // Handle different response formats
        if (response && response.exams) {
          this.examsList = response.exams;
        } else if (response && response.exam) {
          this.examsList = response.exam;
        } else if (response && response.data) {
          this.examsList = response.data;
        } else if (Array.isArray(response)) {
          this.examsList = response;
        } else {
          this.loadMockExams();
          return;
        }
        
        this.filteredExamsList = [...this.examsList];
        console.log('Exams loaded:', this.examsList.length);
        
        // Initialize selected exams from profile data
        this.initializeSelectedExams();
      },
      (error) => {
        this.isLoadingExams = false;
        console.error('Error loading exams:', error);
        this.loadMockExams();
      }
    );
  }

  loadMockExams() {
    this.examsList = [
      { id: '1', title: 'JEE Main' },
      { id: '2', title: 'JEE Advanced' },
      { id: '3', title: 'NEET' },
      { id: '4', title: 'KCET' },
      { id: '5', title: 'COMEDK UGET' },
      { id: '6', title: 'CAT' },
      { id: '7', title: 'GATE' },
      { id: '8', title: 'BITSAT' },
      { id: '9', title: 'MHT CET' },
      { id: '10', title: 'VITEEE' },
      { id: '11', title: 'SRMJEE' },
      { id: '12', title: 'WBJEE' },
      { id: '13', title: 'AP EAMCET' },
      { id: '14', title: 'TS EAMCET' },
      { id: '15', title: 'KEAM' },
      { id: '16', title: 'UPSEE' },
      { id: '17', title: 'GUJCET' },
      { id: '18', title: 'MAT' },
      { id: '19', title: 'XAT' },
      { id: '20', title: 'CMAT' }
    ];
    this.filteredExamsList = [...this.examsList];
    this.initializeSelectedExams();
  }

  initializeSelectedExams() {
    if (this.profileData.entranceExams && this.profileData.entranceExams.length > 0) {
      this.selectedExams = this.profileData.entranceExams.map(id => {
        const exam = this.examsList.find(e => e.id === id);
        return exam || { id: id, title: id };
      });
    }
  }

  // Search filters
  filterStates(event: any, type: string = 'preferred') {
    const searchTerm = event.target.value?.toLowerCase() || '';
    
    if (type === 'basic') {
      this.basicStateSearchTerm = searchTerm;
    } else {
      this.stateSearchTerm = searchTerm;
    }
    
    if (!searchTerm) {
      this.filteredStatesList = [...this.statesList];
    } else {
      this.filteredStatesList = this.statesList.filter(state => 
        state.statename?.toLowerCase().includes(searchTerm)
      );
    }
  }

  filterCities(event: any, type: string = 'preferred') {
    const searchTerm = event.target.value?.toLowerCase() || '';
    
    if (type === 'basic') {
      this.basicCitySearchTerm = searchTerm;
      if (!searchTerm) {
        this.filteredBasicCitiesList = [...this.basicCitiesList];
      } else {
        this.filteredBasicCitiesList = this.basicCitiesList.filter(city => 
          city.cityname?.toLowerCase().includes(searchTerm)
        );
      }
    } else {
      this.citySearchTerm = searchTerm;
      if (!searchTerm) {
        this.filteredCitiesList = [...this.citiesList];
      } else {
        this.filteredCitiesList = this.citiesList.filter(city => 
          city.cityname?.toLowerCase().includes(searchTerm)
        );
      }
    }
  }

  filterExams(event: any) {
    const searchTerm = event.target.value?.toLowerCase() || '';
    this.examSearchTerm = searchTerm;
    
    if (!searchTerm) {
      this.filteredExamsList = [...this.examsList];
    } else {
      this.filteredExamsList = this.examsList.filter(exam => 
        exam.title?.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Modal selection handlers
  selectState(state: any, type: string = 'preferred') {
    if (type === 'basic') {
      this.profileData.currentState = state.id;
      this.profileData.currentStateName = state.statename;
      this.basicStateSearchTerm = '';
      this.filteredStatesList = [...this.statesList];
      this.basicStateModal?.dismiss();
      this.onStateChange(state.id, 'basic');
    } else {
      this.profileData.preferredState = state.id;
      this.profileData.preferredStateName = state.statename;
      this.stateSearchTerm = '';
      this.filteredStatesList = [...this.statesList];
      this.stateModal?.dismiss();
      this.onStateChange(state.id, 'preferred');
    }
  }

  selectCity(city: any, type: string = 'preferred') {
    if (type === 'basic') {
      this.profileData.currentCity = city.id;
      this.profileData.currentCityName = city.cityname;
      this.basicCitySearchTerm = '';
      this.filteredBasicCitiesList = [...this.basicCitiesList];
      this.basicCityModal?.dismiss();
    } else {
      this.profileData.preferredCity = city.id;
      this.profileData.preferredCityName = city.cityname;
      this.citySearchTerm = '';
      this.filteredCitiesList = [...this.citiesList];
      this.cityModal?.dismiss();
    }
  }

  // Cancel modal - close without saving
  cancelStateModal(type: string = 'preferred') {
    if (type === 'basic') {
      this.basicStateSearchTerm = '';
      this.filteredStatesList = [...this.statesList];
      this.basicStateModal?.dismiss();
    } else {
      this.stateSearchTerm = '';
      this.filteredStatesList = [...this.statesList];
      this.stateModal?.dismiss();
    }
  }

  cancelCityModal(type: string = 'preferred') {
    if (type === 'basic') {
      this.basicCitySearchTerm = '';
      this.filteredBasicCitiesList = [...this.basicCitiesList];
      this.basicCityModal?.dismiss();
    } else {
      this.citySearchTerm = '';
      this.filteredCitiesList = [...this.citiesList];
      this.cityModal?.dismiss();
    }
  }

  toggleExamSelection(exam: any) {
    const index = this.tempSelectedExams.findIndex(e => e.id === exam.id);
    if (index > -1) {
      this.tempSelectedExams.splice(index, 1);
    } else {
      this.tempSelectedExams.push(exam);
    }
  }

  isExamSelected(exam: any): boolean {
    return this.tempSelectedExams.some(e => e.id === exam.id);
  }

  confirmExamSelection() {
    this.selectedExams = [...this.tempSelectedExams];
    this.profileData.entranceExams = this.selectedExams.map(e => e.id);
    this.profileData.entranceExamNames = this.selectedExams.map(e => e.title);
    this.examSearchTerm = '';
    this.filteredExamsList = [...this.examsList];
    this.examsModal?.dismiss();
  }

  cancelExamSelection() {
    // Reset temp selection to actual saved selection
    this.tempSelectedExams = [...this.selectedExams];
    this.examSearchTerm = '';
    this.filteredExamsList = [...this.examsList];
    this.examsModal?.dismiss();
  }

  openStateModal(type: string = 'preferred') {
    if (!this.isEditMode) return;
    this.currentModalType = type;
    this.filteredStatesList = [...this.statesList];
    if (type === 'basic') {
      this.basicStateSearchTerm = '';
    } else {
      this.stateSearchTerm = '';
    }
  }

  openCityModal(type: string = 'preferred') {
    if (!this.isEditMode) return;
    
    if (type === 'basic') {
      if (!this.profileData.currentState) {
        this.presentToast('Please select a state first', 'warning');
        return;
      }
      this.basicCitySearchTerm = '';
      this.filteredBasicCitiesList = [...this.basicCitiesList];
    } else {
      if (!this.profileData.preferredState) {
        this.presentToast('Please select a state first', 'warning');
        return;
      }
      this.citySearchTerm = '';
      this.filteredCitiesList = [...this.citiesList];
    }
  }

  openExamsModal() {
    if (!this.isEditMode) return;
    this.examSearchTerm = '';
    this.filteredExamsList = [...this.examsList];
    // Initialize temp selection from current saved selection
    this.tempSelectedExams = [...this.selectedExams];
  }

  loadUserData() {
    this.getResponseDataFromLocalStorage();

    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      console.log('User information:', user);
      this.loginuserId = user.id;
      this.username = user.name;
      this.email = user.email;
      this.phone = user.phone;
      
      // Update profile data with user info
      this.profileData.fullName = user.name || '';
      this.profileData.email = user.email || '';
      this.profileData.phone = user.phone || '';
    } else {
      console.log('No user information found in local storage.');
    }
  }

  loadProfileData() {
    // Load saved profile data from localStorage
    const savedProfile = localStorage.getItem('studentProfile');
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      this.profileData = { ...this.profileData, ...parsedProfile };
      
      // Ensure entranceExams is an array
      if (this.profileData.entranceExams && typeof this.profileData.entranceExams === 'string') {
        const examsString = this.profileData.entranceExams as unknown as string;
        this.profileData.entranceExams = examsString.split(',').map(e => e.trim());
      } else if (!Array.isArray(this.profileData.entranceExams)) {
        this.profileData.entranceExams = [];
      }
      
      // Ensure entranceExamNames is an array
      if (!Array.isArray(this.profileData.entranceExamNames)) {
        this.profileData.entranceExamNames = [];
      }
      
      // Initialize selected exams
      if (this.examsList.length > 0) {
        this.initializeSelectedExams();
      }
      
      // Load cities if states are already selected
      if (this.profileData.preferredState) {
        this.onStateChange(this.profileData.preferredState, 'preferred');
      }
      if (this.profileData.currentState) {
        this.onStateChange(this.profileData.currentState, 'basic');
      }
    }
    
    // Load profile image
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }
  }

  async presentSignInModal() {
    const modal = await this.modalController.create({
      component: PopuplogsignPage,
    });
    return await modal.present();
  }

  async close() {
    await this.modalController.dismiss();
  }

  getResponseDataFromLocalStorage() {
    const storedResponseData = localStorage.getItem('response_data');

    if (storedResponseData) {
      const responseData = JSON.parse(storedResponseData);

      if (responseData && responseData.length > 0) {
        this.loginuserId = responseData[0].id;
        this.username = responseData[0].f_name;
        this.email = responseData[0].email;
        this.phone = responseData[0].phone;
        this.token = responseData[0].token;

        // Update profile data
        this.profileData.fullName = responseData[0].f_name || '';
        this.profileData.email = responseData[0].email || '';
        this.profileData.phone = responseData[0].phone || '';

        console.log('User ID:', this.loginuserId);
        console.log('First Name:', this.username);
        console.log('Email:', this.email);
      } else {
        console.log('No user data found in response_data.');
      }
    } else {
      console.log('No response_data found in local storage.');
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  cancelEdit() {
    // Reload profile data to discard changes
    this.loadProfileData();
    this.isEditMode = false;
    this.presentToast('Changes discarded', 'medium');
  }

  async saveProfile() {
    try {
      // Save profile data to localStorage
      localStorage.setItem('studentProfile', JSON.stringify(this.profileData));
      
      // Update username display
      this.username = this.profileData.fullName || this.username;
      
      // Exit edit mode
      this.isEditMode = false;
      
      // Show success message
      await this.presentToast('Profile saved successfully!', 'success');
    } catch (error) {
      console.error('Error saving profile:', error);
      await this.presentToast('Failed to save profile. Please try again.', 'danger');
    }
  }

  async changeProfilePicture() {
    const alert = await this.alertController.create({
      header: 'Change Profile Picture',
      message: 'This feature requires camera access on a mobile device.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Use Default',
          handler: () => {
            this.profileImage = '';
            localStorage.removeItem('profileImage');
            this.presentToast('Profile picture reset to default', 'success');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    toast.present();
  }

  async logout() {
    try {
      await this.googlePlus.logout();
      localStorage.removeItem('user');
      localStorage.removeItem('response_data');
      localStorage.removeItem('studentProfile');
      localStorage.removeItem('profileImage');
      localStorage.clear();
      this.router.navigate(['/welcomepage']);
      console.log('User successfully logged out');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  logout1() {
    localStorage.removeItem('user');
    localStorage.removeItem('response_data');
    localStorage.removeItem('studentProfile');
    localStorage.removeItem('profileImage');
    localStorage.clear();
    this.router.navigate(['/welcomepage']);
  }
}
