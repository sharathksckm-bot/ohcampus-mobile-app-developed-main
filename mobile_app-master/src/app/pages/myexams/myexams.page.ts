import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController, NavController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';

interface Exam {
  id: string;
  title: string;
  category?: string;
  level?: string;
  image?: string;
  selected?: boolean;
}

@Component({
  selector: 'app-myexams',
  templateUrl: './myexams.page.html',
  styleUrls: ['./myexams.page.scss'],
})
export class MyexamsPage implements OnInit {
  userId: string = '';
  allExams: Exam[] = [];
  filteredExams: Exam[] = [];
  popularExams: Exam[] = [];
  selectedExams: Exam[] = [];
  originalSelectedIds: string[] = [];
  
  selectedLevel: string = 'all';
  searchText: string = '';
  isLoading: boolean = false;
  hasChanges: boolean = false;

  constructor(
    private service: ServiceService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  ionViewWillEnter() {
    this.loadUserData();
  }

  loadUserData() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const responseData = JSON.parse(localStorage.getItem('response_data') || '[]');
    
    if (user) {
      this.userId = user.id;
    } else if (responseData && responseData.length > 0) {
      this.userId = responseData[0].id;
    }
    
    if (this.userId) {
      this.loadExams();
    } else {
      this.presentToast('Please login to manage your exams', 'warning');
      this.router.navigate(['/editprofile']);
    }
  }

  async loadExams() {
    this.isLoading = true;
    
    try {
      // Load all exams
      const allExamsRes = await this.service.getAllExamsList().toPromise();
      if (allExamsRes && allExamsRes.examslist) {
        this.allExams = allExamsRes.examslist.map((exam: any) => ({
          id: exam.id || exam.examId,
          title: exam.title || exam.name,
          category: exam.category || exam.categoryName,
          level: exam.level || exam.academic_category,
          image: exam.image,
          selected: false
        }));
      }
      
      // Load popular exams
      const popularRes = await this.service.getPopularExams().toPromise();
      if (popularRes && popularRes.examslist) {
        this.popularExams = popularRes.examslist.slice(0, 10).map((exam: any) => ({
          id: exam.id || exam.examId,
          title: exam.title || exam.name,
          category: exam.category,
          level: exam.level,
          image: exam.image
        }));
      } else {
        // Fallback: use first 10 exams as popular
        this.popularExams = this.allExams.slice(0, 10);
      }
      
      // Load user's selected exams
      if (this.userId) {
        const userExamsRes = await this.service.getUserExams(this.userId).toPromise();
        if (userExamsRes && userExamsRes.examIds) {
          const userExamIds = userExamsRes.examIds.split(',');
          this.originalSelectedIds = [...userExamIds];
          
          // Mark selected exams
          this.allExams.forEach(exam => {
            exam.selected = userExamIds.includes(exam.id);
          });
          
          this.selectedExams = this.allExams.filter(exam => exam.selected);
        }
      }
      
      this.filterExams();
    } catch (error) {
      console.error('Error loading exams:', error);
      // Load mock data for testing
      this.loadMockExams();
    } finally {
      this.isLoading = false;
    }
  }

  loadMockExams() {
    // Mock exams data for testing when API is not available
    const mockExams: Exam[] = [
      { id: '1', title: 'JEE Main', category: 'Engineering', level: 'undergraduate' },
      { id: '2', title: 'JEE Advanced', category: 'Engineering', level: 'undergraduate' },
      { id: '3', title: 'NEET', category: 'Medical', level: 'undergraduate' },
      { id: '4', title: 'CAT', category: 'Management', level: 'postgraduate' },
      { id: '5', title: 'GATE', category: 'Engineering', level: 'postgraduate' },
      { id: '6', title: 'UPSC CSE', category: 'Government', level: 'professional' },
      { id: '7', title: 'KCET', category: 'Engineering', level: 'undergraduate' },
      { id: '8', title: 'COMEDK', category: 'Engineering', level: 'undergraduate' },
      { id: '9', title: 'CLAT', category: 'Law', level: 'undergraduate' },
      { id: '10', title: 'XAT', category: 'Management', level: 'postgraduate' },
      { id: '11', title: 'MAT', category: 'Management', level: 'postgraduate' },
      { id: '12', title: 'GMAT', category: 'Management', level: 'postgraduate' },
      { id: '13', title: 'GRE', category: 'General', level: 'postgraduate' },
      { id: '14', title: 'AIIMS', category: 'Medical', level: 'undergraduate' },
      { id: '15', title: 'BITSAT', category: 'Engineering', level: 'undergraduate' },
    ];
    
    this.allExams = mockExams.map(exam => ({ ...exam, selected: false }));
    this.popularExams = mockExams.slice(0, 8);
    
    // Load saved exams from localStorage
    const savedExams = localStorage.getItem('userSelectedExams');
    if (savedExams) {
      const savedIds = JSON.parse(savedExams);
      this.originalSelectedIds = [...savedIds];
      this.allExams.forEach(exam => {
        exam.selected = savedIds.includes(exam.id);
      });
      this.selectedExams = this.allExams.filter(exam => exam.selected);
    }
    
    this.filterExams();
  }

  filterExams() {
    let filtered = [...this.allExams];
    
    // Filter by level
    if (this.selectedLevel !== 'all') {
      filtered = filtered.filter(exam => 
        exam.level?.toLowerCase() === this.selectedLevel.toLowerCase()
      );
    }
    
    // Filter by search text
    if (this.searchText && this.searchText.trim()) {
      const search = this.searchText.toLowerCase().trim();
      filtered = filtered.filter(exam =>
        exam.title.toLowerCase().includes(search) ||
        exam.category?.toLowerCase().includes(search)
      );
    }
    
    this.filteredExams = filtered;
  }

  onLevelChange(event: any) {
    this.filterExams();
  }

  isExamSelected(examId: string): boolean {
    return this.selectedExams.some(exam => exam.id === examId);
  }

  toggleExam(exam: Exam) {
    const index = this.selectedExams.findIndex(e => e.id === exam.id);
    if (index > -1) {
      this.selectedExams.splice(index, 1);
      const allExamIndex = this.allExams.findIndex(e => e.id === exam.id);
      if (allExamIndex > -1) {
        this.allExams[allExamIndex].selected = false;
      }
    } else {
      this.selectedExams.push({ ...exam, selected: true });
      const allExamIndex = this.allExams.findIndex(e => e.id === exam.id);
      if (allExamIndex > -1) {
        this.allExams[allExamIndex].selected = true;
      }
    }
    this.checkForChanges();
  }

  onExamToggle(exam: Exam) {
    if (exam.selected) {
      if (!this.selectedExams.find(e => e.id === exam.id)) {
        this.selectedExams.push(exam);
      }
    } else {
      const index = this.selectedExams.findIndex(e => e.id === exam.id);
      if (index > -1) {
        this.selectedExams.splice(index, 1);
      }
    }
    this.checkForChanges();
  }

  removeExam(exam: Exam) {
    const index = this.selectedExams.findIndex(e => e.id === exam.id);
    if (index > -1) {
      this.selectedExams.splice(index, 1);
    }
    const allExamIndex = this.allExams.findIndex(e => e.id === exam.id);
    if (allExamIndex > -1) {
      this.allExams[allExamIndex].selected = false;
    }
    this.checkForChanges();
  }

  checkForChanges() {
    const currentIds = this.selectedExams.map(e => e.id).sort();
    const originalIds = [...this.originalSelectedIds].sort();
    this.hasChanges = JSON.stringify(currentIds) !== JSON.stringify(originalIds);
  }

  async saveExams() {
    const loading = await this.loadingController.create({
      message: 'Saving your exams...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      const examIds = this.selectedExams.map(exam => exam.id);
      
      // Save to API
      if (this.userId) {
        await this.service.saveUserExams(this.userId, examIds).toPromise();
      }
      
      // Also save to localStorage for offline access
      localStorage.setItem('userSelectedExams', JSON.stringify(examIds));
      localStorage.setItem('userSelectedExamsData', JSON.stringify(this.selectedExams));
      
      this.originalSelectedIds = [...examIds];
      this.hasChanges = false;
      
      await this.presentToast('Your exams have been saved successfully!', 'success');
    } catch (error) {
      console.error('Error saving exams:', error);
      // Save to localStorage even if API fails
      const examIds = this.selectedExams.map(exam => exam.id);
      localStorage.setItem('userSelectedExams', JSON.stringify(examIds));
      localStorage.setItem('userSelectedExamsData', JSON.stringify(this.selectedExams));
      this.originalSelectedIds = [...examIds];
      this.hasChanges = false;
      await this.presentToast('Exams saved locally', 'success');
    } finally {
      await loading.dismiss();
    }
  }

  viewExamDetails(examId: string) {
    this.router.navigate(['/examdetails', examId]);
  }

  goBack() {
    if (this.hasChanges) {
      this.showUnsavedChangesAlert();
    } else {
      this.navController.back();
    }
  }

  async showUnsavedChangesAlert() {
    const alert = await this.alertController.create({
      header: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save them before leaving?',
      buttons: [
        {
          text: 'Discard',
          role: 'cancel',
          handler: () => {
            this.navController.back();
          }
        },
        {
          text: 'Save',
          handler: async () => {
            await this.saveExams();
            this.navController.back();
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
    await toast.present();
  }
}
