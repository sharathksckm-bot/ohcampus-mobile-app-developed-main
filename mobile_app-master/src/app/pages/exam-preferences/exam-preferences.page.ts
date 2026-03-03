import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { MocktestService, Exam, ExamPreference } from '../../services/mocktest.service';

@Component({
  selector: 'app-exam-preferences',
  templateUrl: './exam-preferences.page.html',
  styleUrls: ['./exam-preferences.page.scss'],
})
export class ExamPreferencesPage implements OnInit {
  allExams: Exam[] = [];
  selectedExamIds: string[] = [];
  currentPreferences: ExamPreference | null = null;
  isLoading = true;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.loadExams();
  }

  ionViewWillEnter() {
    this.loadCurrentPreferences();
  }

  async loadExams() {
    this.mocktestService.getAllExams().subscribe({
      next: (exams) => {
        this.allExams = exams;
        this.loadCurrentPreferences();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading exams:', error);
        this.isLoading = false;
      }
    });
  }

  loadCurrentPreferences() {
    this.currentPreferences = this.mocktestService.getExamPreferences();
    if (this.currentPreferences) {
      this.selectedExamIds = [...this.currentPreferences.exam_ids];
    } else {
      this.selectedExamIds = [];
    }
  }

  toggleExam(examId: string) {
    const index = this.selectedExamIds.indexOf(examId);
    if (index > -1) {
      this.selectedExamIds.splice(index, 1);
    } else {
      this.selectedExamIds.push(examId);
    }
  }

  isSelected(examId: string): boolean {
    return this.selectedExamIds.includes(examId);
  }

  async savePreferences() {
    const loading = await this.loadingController.create({
      message: 'Saving preferences...',
      spinner: 'crescent'
    });
    await loading.present();

    this.mocktestService.setExamPreferences(this.selectedExamIds).subscribe({
      next: async () => {
        await loading.dismiss();
        this.showToast('Preferences saved successfully!');
        this.router.navigate(['/mocktest']);
      },
      error: async (error) => {
        console.error('Error saving preferences:', error);
        await loading.dismiss();
        this.showError('Failed to save preferences. Please try again.');
      }
    });
  }

  async clearPreferences() {
    const alert = await this.alertController.create({
      header: 'Clear Preferences',
      message: 'This will show all available mock tests. Continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Clear',
          handler: () => {
            this.mocktestService.clearExamPreferences();
            this.selectedExamIds = [];
            this.showToast('Preferences cleared');
            this.router.navigate(['/mocktest']);
          }
        }
      ]
    });
    await alert.present();
  }

  async showError(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/mocktest']);
  }

  getExamIcon(examId: string): string {
    switch (examId) {
      case 'kcet_2024':
        return 'school-outline';
      case 'neet_2024':
        return 'medkit-outline';
      case 'jee_main_2024':
        return 'build-outline';
      default:
        return 'document-text-outline';
    }
  }
}
