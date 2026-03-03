import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MocktestService, TestResult, Exam } from '../../services/mocktest.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.page.html',
  styleUrls: ['./test-history.page.scss'],
})
export class TestHistoryPage implements OnInit {
  history: TestResult[] = [];
  exams: { [key: string]: Exam } = {};
  isLoading = true;

  constructor(
    private router: Router,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.loadHistory();
  }

  ionViewWillEnter() {
    this.loadHistory();
  }

  loadHistory() {
    this.history = this.mocktestService.getTestHistory();
    this.mocktestService.getExams().subscribe(exams => {
      exams.forEach(exam => {
        this.exams[exam.exam_id] = exam;
      });
      this.isLoading = false;
    });
  }

  getExamName(examId: string): string {
    return this.exams[examId]?.name || examId;
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

  getScoreColor(percentage: number): string {
    if (percentage >= 70) return 'success';
    if (percentage >= 50) return 'warning';
    return 'danger';
  }

  viewResult(testId: string) {
    this.router.navigate(['/test-result', testId]);
  }

  goBack() {
    this.router.navigate(['/mocktest']);
  }

  clearHistory() {
    localStorage.removeItem('mocktest_history');
    this.history = [];
  }
}
