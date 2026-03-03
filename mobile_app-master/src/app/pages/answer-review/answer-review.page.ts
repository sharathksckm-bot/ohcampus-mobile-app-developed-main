import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MocktestService, TestResult, AnswerReview, Exam } from '../../services/mocktest.service';

@Component({
  selector: 'app-answer-review',
  templateUrl: './answer-review.page.html',
  styleUrls: ['./answer-review.page.scss'],
})
export class AnswerReviewPage implements OnInit {
  testId: string = '';
  result: TestResult | null = null;
  exam: Exam | null = null;
  answers: AnswerReview[] = [];
  filteredAnswers: AnswerReview[] = [];
  sections: string[] = [];
  selectedSection: string = 'all';
  selectedFilter: string = 'all'; // all, correct, incorrect, unanswered
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
      if (result && result.answers_review) {
        this.result = result;
        this.answers = result.answers_review;
        this.filteredAnswers = [...this.answers];
        this.sections = Array.from(new Set(this.answers.map(a => a.question.section)));
        
        this.mocktestService.getExam(result.exam_id).subscribe(exam => {
          this.exam = exam || null;
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  filterBySection(section: string) {
    this.selectedSection = section;
    this.applyFilters();
  }

  filterByStatus(status: string) {
    this.selectedFilter = status;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.answers];
    
    // Filter by section
    if (this.selectedSection !== 'all') {
      filtered = filtered.filter(a => a.question.section === this.selectedSection);
    }
    
    // Filter by status
    switch (this.selectedFilter) {
      case 'correct':
        filtered = filtered.filter(a => a.is_correct);
        break;
      case 'incorrect':
        filtered = filtered.filter(a => a.user_answer !== null && !a.is_correct);
        break;
      case 'unanswered':
        filtered = filtered.filter(a => a.user_answer === null);
        break;
    }
    
    this.filteredAnswers = filtered;
  }

  getQuestionIndex(answer: AnswerReview): number {
    return this.answers.indexOf(answer) + 1;
  }

  getOptionLabel(index: number): string {
    return ['A', 'B', 'C', 'D', 'E'][index] || '';
  }

  getStatusClass(answer: AnswerReview): string {
    if (answer.user_answer === null) return 'unanswered';
    return answer.is_correct ? 'correct' : 'incorrect';
  }

  getStatusText(answer: AnswerReview): string {
    if (answer.user_answer === null) return 'Not Attempted';
    return answer.is_correct ? 'Correct' : 'Incorrect';
  }

  getFilterCount(filter: string): number {
    switch (filter) {
      case 'all':
        return this.answers.length;
      case 'correct':
        return this.answers.filter(a => a.is_correct).length;
      case 'incorrect':
        return this.answers.filter(a => a.user_answer !== null && !a.is_correct).length;
      case 'unanswered':
        return this.answers.filter(a => a.user_answer === null).length;
      default:
        return 0;
    }
  }

  goBack() {
    this.router.navigate(['/test-result', this.testId]);
  }

  goToMockTests() {
    this.router.navigate(['/mocktest']);
  }
}
