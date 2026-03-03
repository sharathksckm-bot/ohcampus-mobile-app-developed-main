import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MocktestService, Exam, MockTestUser, ExamPreference } from '../../services/mocktest.service';

@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.page.html',
  styleUrls: ['./mocktest.page.scss'],
})
export class MocktestPage implements OnInit {
  exams: Exam[] = [];
  allExams: Exam[] = [];
  currentUser: MockTestUser | null = null;
  examPreferences: ExamPreference | null = null;
  preferredExamNames: string[] = [];
  isLoading = true;
  isFiltered = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.mocktestService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    this.mocktestService.examPreferences$.subscribe(prefs => {
      this.examPreferences = prefs;
      this.preferredExamNames = this.mocktestService.getPreferredExamNames();
      this.isFiltered = this.mocktestService.hasExamPreferences();
      this.loadExams();
    });
  }

  ionViewWillEnter() {
    this.loadExams();
    this.preferredExamNames = this.mocktestService.getPreferredExamNames();
    this.isFiltered = this.mocktestService.hasExamPreferences();
  }

  async loadExams() {
    const loading = await this.loadingController.create({
      message: 'Loading exams...',
      spinner: 'crescent'
    });
    await loading.present();

    // Load all exams for reference
    this.mocktestService.getAllExams().subscribe(allExams => {
      this.allExams = allExams;
    });

    // Load filtered exams
    this.mocktestService.getFilteredExams().subscribe({
      next: (exams) => {
        this.exams = exams;
        this.isLoading = false;
        loading.dismiss();
      },
      error: (error) => {
        console.error('Error loading exams:', error);
        this.isLoading = false;
        loading.dismiss();
      }
    });
  }

  async startTest(exam: Exam) {
    if (!this.mocktestService.isAuthenticated()) {
      this.router.navigate(['/mocktest-auth']);
      return;
    }

    const alert = await this.alertController.create({
      header: `Start ${exam.name}`,
      message: `
        <div class="exam-info">
          <p><strong>Duration:</strong> ${exam.duration_minutes} minutes</p>
          <p><strong>Questions:</strong> ${exam.total_questions}</p>
          <p><strong>Sections:</strong> ${exam.sections.join(', ')}</p>
        </div>
        <p>Are you ready to start the test?</p>
      `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Start Test',
          handler: () => {
            this.beginTest(exam);
          }
        }
      ]
    });

    await alert.present();
  }

  async beginTest(exam: Exam) {
    const loading = await this.loadingController.create({
      message: 'Starting test...',
      spinner: 'crescent'
    });
    await loading.present();

    this.mocktestService.startTest(exam.exam_id).subscribe({
      next: (testSession) => {
        loading.dismiss();
        this.router.navigate(['/test-interface', testSession.test_id]);
      },
      error: (error) => {
        console.error('Error starting test:', error);
        loading.dismiss();
        this.showError('Failed to start test. Please try again.');
      }
    });
  }

  goToHistory() {
    if (!this.mocktestService.isAuthenticated()) {
      this.router.navigate(['/mocktest-auth']);
      return;
    }
    this.router.navigate(['/test-history']);
  }

  goToLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

  goToAuth() {
    this.router.navigate(['/mocktest-auth']);
  }

  goToExamPreferences() {
    this.router.navigate(['/exam-preferences']);
  }

  logout() {
    this.mocktestService.logout();
    this.router.navigate(['/mocktest']);
  }

  goBack() {
    this.router.navigate(['/tabs/tabs/tab1']);
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

  getExamColor(examId: string): string {
    switch (examId) {
      case 'kcet_2024':
        return 'primary';
      case 'neet_2024':
        return 'success';
      case 'jee_main_2024':
        return 'warning';
      default:
        return 'medium';
    }
  }

  async showError(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
