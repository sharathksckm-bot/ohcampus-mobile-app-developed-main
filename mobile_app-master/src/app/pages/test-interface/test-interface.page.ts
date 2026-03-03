import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, IonContent } from '@ionic/angular';
import { MocktestService, Question, TestSession } from '../../services/mocktest.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.page.html',
  styleUrls: ['./test-interface.page.scss'],
})
export class TestInterfacePage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content!: IonContent;

  testId: string = '';
  testSession: TestSession | null = null;
  currentQuestionIndex = 0;
  answers: { [key: string]: number } = {};
  markedForReview: string[] = [];
  
  // Timer
  timeRemaining = 0;
  timerSubscription: Subscription | null = null;
  
  // UI state
  showQuestionPalette = false;
  isLoading = true;
  sections: string[] = [];
  currentSection: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('testId') || '';
    this.loadTestSession();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  loadTestSession() {
    const storedTest = this.mocktestService.getCurrentTest();
    if (storedTest && storedTest.test_id === this.testId) {
      this.testSession = storedTest;
      this.answers = storedTest.answers || {};
      this.markedForReview = storedTest.marked_for_review || [];
      this.timeRemaining = this.calculateRemainingTime(storedTest);
      this.sections = Array.from(new Set(storedTest.questions.map((q: Question) => q.section))) as string[];
      this.currentSection = this.sections[0];
      this.startTimer();
      this.isLoading = false;
    } else {
      this.router.navigate(['/mocktest']);
    }
  }

  calculateRemainingTime(test: any): number {
    const startedAt = new Date(test.started_at);
    const elapsedSeconds = Math.floor((new Date().getTime() - startedAt.getTime()) / 1000);
    const totalSeconds = test.duration_minutes * 60;
    return Math.max(0, totalSeconds - elapsedSeconds);
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.autoSubmit();
      }
    });
  }

  get formattedTime(): string {
    const hours = Math.floor(this.timeRemaining / 3600);
    const minutes = Math.floor((this.timeRemaining % 3600) / 60);
    const seconds = this.timeRemaining % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  get currentQuestion(): Question | null {
    if (!this.testSession || !this.testSession.questions) return null;
    return this.testSession.questions[this.currentQuestionIndex];
  }

  get currentSectionQuestions(): Question[] {
    if (!this.testSession) return [];
    return this.testSession.questions.filter(q => q.section === this.currentSection);
  }

  selectAnswer(optionIndex: number) {
    if (!this.currentQuestion) return;
    this.answers[this.currentQuestion.question_id] = optionIndex;
    this.mocktestService.saveAnswer(this.testId, this.currentQuestion.question_id, optionIndex);
  }

  clearAnswer() {
    if (!this.currentQuestion) return;
    delete this.answers[this.currentQuestion.question_id];
    this.mocktestService.saveAnswer(this.testId, this.currentQuestion.question_id, -1);
  }

  toggleMarkForReview() {
    if (!this.currentQuestion) return;
    const qId = this.currentQuestion.question_id;
    const isMarked = this.markedForReview.includes(qId);
    
    if (isMarked) {
      this.markedForReview = this.markedForReview.filter(id => id !== qId);
    } else {
      this.markedForReview.push(qId);
    }
    
    this.mocktestService.markForReview(this.testId, qId, !isMarked);
  }

  isMarkedForReview(): boolean {
    return this.currentQuestion ? this.markedForReview.includes(this.currentQuestion.question_id) : false;
  }

  isAnswered(questionId: string): boolean {
    return this.answers[questionId] !== undefined && this.answers[questionId] !== -1;
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.updateCurrentSection();
      this.scrollToTop();
    }
  }

  nextQuestion() {
    if (this.testSession && this.currentQuestionIndex < this.testSession.questions.length - 1) {
      this.currentQuestionIndex++;
      this.updateCurrentSection();
      this.scrollToTop();
    }
  }

  goToQuestion(index: number) {
    this.currentQuestionIndex = index;
    this.updateCurrentSection();
    this.showQuestionPalette = false;
    this.scrollToTop();
  }

  updateCurrentSection() {
    if (this.currentQuestion) {
      this.currentSection = this.currentQuestion.section;
    }
  }

  selectSection(section: string) {
    this.currentSection = section;
    const firstQuestionIndex = this.testSession?.questions.findIndex(q => q.section === section);
    if (firstQuestionIndex !== undefined && firstQuestionIndex >= 0) {
      this.currentQuestionIndex = firstQuestionIndex;
    }
  }

  toggleQuestionPalette() {
    this.showQuestionPalette = !this.showQuestionPalette;
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }

  getQuestionStatus(question: Question): string {
    const isAnswered = this.isAnswered(question.question_id);
    const isMarked = this.markedForReview.includes(question.question_id);
    
    if (isMarked && isAnswered) return 'answered-marked';
    if (isMarked) return 'marked';
    if (isAnswered) return 'answered';
    return 'not-visited';
  }

  getAnsweredCount(): number {
    return Object.keys(this.answers).filter(k => this.answers[k] !== -1).length;
  }

  getMarkedCount(): number {
    return this.markedForReview.length;
  }

  getSectionStats(section: string): { answered: number; total: number } {
    const sectionQuestions = this.testSession?.questions.filter(q => q.section === section) || [];
    const answered = sectionQuestions.filter(q => this.isAnswered(q.question_id)).length;
    return { answered, total: sectionQuestions.length };
  }

  async confirmSubmit() {
    const alert = await this.alertController.create({
      header: 'Submit Test',
      message: `
        <div class="submit-info">
          <p><strong>Answered:</strong> ${this.getAnsweredCount()} / ${this.testSession?.total_questions || 0}</p>
          <p><strong>Marked for Review:</strong> ${this.getMarkedCount()}</p>
          <p><strong>Time Remaining:</strong> ${this.formattedTime}</p>
        </div>
        <p>Are you sure you want to submit the test?</p>
      `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Submit',
          handler: () => {
            this.submitTest();
          }
        }
      ]
    });
    await alert.present();
  }

  async autoSubmit() {
    const alert = await this.alertController.create({
      header: 'Time\'s Up!',
      message: 'Your test will be submitted automatically.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.submitTest();
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }

  async submitTest() {
    const loading = await this.loadingController.create({
      message: 'Submitting test...',
      spinner: 'crescent'
    });
    await loading.present();

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.mocktestService.submitTest(this.testId).subscribe({
      next: (result) => {
        loading.dismiss();
        this.router.navigate(['/test-result', this.testId], { replaceUrl: true });
      },
      error: (error) => {
        console.error('Error submitting test:', error);
        loading.dismiss();
        this.showError('Failed to submit test. Please try again.');
      }
    });
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
