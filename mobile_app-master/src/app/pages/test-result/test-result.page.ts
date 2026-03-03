import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MocktestService, TestResult, Exam } from '../../services/mocktest.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.page.html',
  styleUrls: ['./test-result.page.scss'],
})
export class TestResultPage implements OnInit {
  testId: string = '';
  result: TestResult | null = null;
  exam: Exam | null = null;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('testId') || '';
    this.loadResult();
  }

  loadResult() {
    this.mocktestService.getTestResult(this.testId).subscribe(result => {
      if (result) {
        this.result = result;
        this.mocktestService.getExam(result.exam_id).subscribe(exam => {
          this.exam = exam || null;
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  getGrade(): string {
    if (!this.result) return 'N/A';
    const pct = this.result.percentage;
    if (pct >= 90) return 'A+';
    if (pct >= 80) return 'A';
    if (pct >= 70) return 'B+';
    if (pct >= 60) return 'B';
    if (pct >= 50) return 'C';
    if (pct >= 40) return 'D';
    return 'F';
  }

  getGradeColor(): string {
    if (!this.result) return 'medium';
    const pct = this.result.percentage;
    if (pct >= 70) return 'success';
    if (pct >= 50) return 'warning';
    return 'danger';
  }

  getPerformanceMessage(): string {
    if (!this.result) return '';
    const pct = this.result.percentage;
    if (pct >= 90) return 'Outstanding Performance! 🏆';
    if (pct >= 80) return 'Excellent Work! 🌟';
    if (pct >= 70) return 'Great Job! Keep it up! 👏';
    if (pct >= 60) return 'Good Effort! Room to improve 💪';
    if (pct >= 50) return 'Fair Performance. Practice more! 📚';
    return 'Keep practicing, you can do it! 🎯';
  }

  getSectionPercentage(section: string): number {
    if (!this.result || !this.result.section_wise[section]) return 0;
    const s = this.result.section_wise[section];
    if (s.total === 0) return 0;
    return Math.round((s.correct / s.total) * 100);
  }

  getSectionColor(section: string): string {
    const pct = this.getSectionPercentage(section);
    if (pct >= 70) return 'success';
    if (pct >= 50) return 'warning';
    return 'danger';
  }

  getSections(): string[] {
    if (!this.result) return [];
    return Object.keys(this.result.section_wise);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  goToMockTests() {
    this.router.navigate(['/mocktest']);
  }

  retakeTest() {
    if (this.result) {
      this.mocktestService.startTest(this.result.exam_id).subscribe({
        next: (testSession) => {
          this.router.navigate(['/test-interface', testSession.test_id]);
        }
      });
    }
  }

  goToLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

  goToHistory() {
    this.router.navigate(['/test-history']);
  }

  reviewAnswers() {
    this.router.navigate(['/answer-review', this.testId]);
  }

  hasAnswerReview(): boolean {
    return this.result !== null && this.result.answers_review !== undefined && this.result.answers_review.length > 0;
  }
}
