import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/service.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

interface Alert {
  id: string;
  title: string;
  description?: string;
  hyperlink?: string;
  timestamp: string;
  examTags?: string[];
  type?: string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  allAlerts: Alert[] = [];
  displayedAlerts: Alert[] = [];
  userExams: string[] = [];
  
  selectedFilter: string = 'all';
  isLoading: boolean = false;
  hasMoreAlerts: boolean = false;
  currentOffset: number = 0;
  limit: number = 10;

  constructor(
    private service: ServiceService,
    private router: Router,
    private alertController: AlertController,
    private navController: NavController,
    private toastController: ToastController,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.loadUserExams();
    this.loadAlerts();
  }

  ionViewWillEnter() {
    this.loadUserExams();
    this.loadAlerts();
  }

  loadUserExams() {
    // Load user's selected exams from localStorage
    const savedExams = localStorage.getItem('userSelectedExams');
    if (savedExams) {
      this.userExams = JSON.parse(savedExams);
    }
  }

  async loadAlerts() {
    this.isLoading = true;
    this.currentOffset = 0;
    
    try {
      const userId = this.getUserId();
      let response;
      
      if (this.selectedFilter === 'personalized' && userId) {
        response = await this.service.getUserAlerts(userId, this.limit).toPromise();
      } else {
        response = await this.service.getAlerts([], this.limit, 0).toPromise();
      }
      
      if (response && response.alerts) {
        this.allAlerts = this.parseAlerts(response.alerts);
        this.displayedAlerts = [...this.allAlerts];
        this.hasMoreAlerts = response.hasMore || response.alerts.length >= this.limit;
      } else {
        this.loadMockAlerts();
      }
    } catch (error) {
      console.error('Error loading alerts:', error);
      this.loadMockAlerts();
    } finally {
      this.isLoading = false;
    }
  }

  loadMockAlerts() {
    // Mock alerts for testing
    const mockAlerts: Alert[] = [
      {
        id: '1',
        title: 'JEE Main 2025 Registration Open',
        description: 'NTA has opened the registration window for JEE Main 2025 Session 1. Last date to apply is January 15, 2025.',
        hyperlink: 'https://jeemain.nta.nic.in',
        timestamp: new Date().toISOString(),
        examTags: ['JEE Main'],
        type: 'registration'
      },
      {
        id: '2',
        title: 'NEET 2025 Exam Date Announced',
        description: 'The National Testing Agency has announced NEET 2025 exam date as May 4, 2025. Registration will begin in March.',
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        examTags: ['NEET'],
        type: 'announcement'
      },
      {
        id: '3',
        title: 'KCET 2025 Counseling Schedule',
        description: 'Karnataka Examinations Authority has released KCET 2025 counseling schedule. Check important dates and document requirements.',
        hyperlink: 'https://cetonline.karnataka.gov.in',
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        examTags: ['KCET'],
        type: 'counseling'
      },
      {
        id: '4',
        title: 'CAT 2025 Admit Card Released',
        description: 'IIM has released CAT 2025 admit cards. Download from the official website using your registration credentials.',
        hyperlink: 'https://iimcat.ac.in',
        timestamp: new Date(Date.now() - 259200000).toISOString(),
        examTags: ['CAT'],
        type: 'admit_card'
      },
      {
        id: '5',
        title: 'GATE 2025 Application Correction Window',
        description: 'Last chance to correct your GATE 2025 application form. Correction window closes on December 20, 2024.',
        timestamp: new Date(Date.now() - 345600000).toISOString(),
        examTags: ['GATE'],
        type: 'deadline'
      },
      {
        id: '6',
        title: 'Free Counseling Session for Engineering Aspirants',
        description: 'Join our free career counseling webinar for engineering aspirants. Get guidance on college selection and branch preferences.',
        hyperlink: 'https://ohcampus.com/counseling',
        timestamp: new Date(Date.now() - 432000000).toISOString(),
        examTags: ['JEE Main', 'JEE Advanced', 'KCET', 'COMEDK'],
        type: 'counseling'
      }
    ];
    
    // Filter by user's exams if personalized filter is selected
    if (this.selectedFilter === 'personalized' && this.userExams.length > 0) {
      this.allAlerts = mockAlerts.filter(alert => {
        if (!alert.examTags || alert.examTags.length === 0) return true;
        return alert.examTags.some(tag => 
          this.userExams.some(userExam => 
            tag.toLowerCase().includes(userExam.toLowerCase()) || 
            userExam.toLowerCase().includes(tag.toLowerCase())
          )
        );
      });
    } else {
      this.allAlerts = mockAlerts;
    }
    
    this.displayedAlerts = [...this.allAlerts];
    this.hasMoreAlerts = false;
  }

  parseAlerts(alerts: any[]): Alert[] {
    return alerts.map(alert => ({
      id: alert.id || alert.alertId,
      title: alert.title,
      description: alert.description || alert.message,
      hyperlink: alert.hyperlink || alert.link || alert.url,
      timestamp: alert.timestamp || alert.createdAt || alert.created_at,
      examTags: alert.examTags || alert.exam_tags || (alert.exams ? alert.exams.split(',') : []),
      type: alert.type || alert.alertType || 'general'
    }));
  }

  getUserId(): string {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const responseData = JSON.parse(localStorage.getItem('response_data') || '[]');
    
    if (user) return user.id;
    if (responseData && responseData.length > 0) return responseData[0].id;
    return '';
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.loadAlerts();
  }

  async loadMoreAlerts(event: any) {
    this.currentOffset += this.limit;
    
    try {
      const response = await this.service.getAlerts([], this.limit, this.currentOffset).toPromise();
      
      if (response && response.alerts && response.alerts.length > 0) {
        const newAlerts = this.parseAlerts(response.alerts);
        this.allAlerts = [...this.allAlerts, ...newAlerts];
        this.displayedAlerts = [...this.allAlerts];
        this.hasMoreAlerts = response.hasMore || response.alerts.length >= this.limit;
      } else {
        this.hasMoreAlerts = false;
      }
    } catch (error) {
      console.error('Error loading more alerts:', error);
      this.hasMoreAlerts = false;
    }
    
    event.target.complete();
  }

  async refreshAlerts() {
    await this.loadAlerts();
    const toast = await this.toastController.create({
      message: 'Alerts refreshed',
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }

  openAlert(alert: Alert) {
    if (alert.hyperlink) {
      this.iab.create(alert.hyperlink, '_system');
    }
  }

  getAlertTypeClass(alert: Alert): string {
    switch (alert.type) {
      case 'registration':
        return 'type-registration';
      case 'counseling':
        return 'type-counseling';
      case 'admit_card':
        return 'type-admit';
      case 'deadline':
        return 'type-deadline';
      case 'announcement':
        return 'type-announcement';
      default:
        return 'type-general';
    }
  }

  getAlertIcon(alert: Alert): string {
    switch (alert.type) {
      case 'registration':
        return 'create-outline';
      case 'counseling':
        return 'people-outline';
      case 'admit_card':
        return 'document-text-outline';
      case 'deadline':
        return 'alarm-outline';
      case 'announcement':
        return 'megaphone-outline';
      default:
        return 'notifications-outline';
    }
  }

  formatDate(timestamp: string): string {
    if (!timestamp) return '';
    
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        return diffMinutes <= 1 ? 'Just now' : `${diffMinutes} minutes ago`;
      }
      return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  }

  async showFilterModal() {
    const alert = await this.alertController.create({
      header: 'Filter Alerts',
      inputs: [
        {
          name: 'all',
          type: 'radio',
          label: 'All Alerts',
          value: 'all',
          checked: this.selectedFilter === 'all'
        },
        {
          name: 'personalized',
          type: 'radio',
          label: 'For My Exams',
          value: 'personalized',
          checked: this.selectedFilter === 'personalized'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Apply',
          handler: (data) => {
            if (data) {
              this.setFilter(data);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  goBack() {
    this.navController.back();
  }
}
