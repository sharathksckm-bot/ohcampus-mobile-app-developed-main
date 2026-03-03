import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

export interface MockTestUser {
  user_id: string;
  email: string;
  name: string;
  token: string;
}

export interface Exam {
  exam_id: string;
  name: string;
  description: string;
  duration_minutes: number;
  sections: string[];
  total_questions: number;
}

export interface Question {
  question_id: string;
  exam_id: string;
  section: string;
  question_text: string;
  options: string[];
  correct_answer: number;
  explanation?: string;
  difficulty: string;
  marks: number;
  negative_marks: number;
}

export interface TestSession {
  test_id: string;
  exam_id: string;
  duration_minutes: number;
  total_questions: number;
  questions: Question[];
}

export interface AnswerReview {
  question: Question;
  user_answer: number | null;
  is_correct: boolean;
}

export interface TestResult {
  result_id: string;
  test_id: string;
  exam_id: string;
  total_questions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
  max_score: number;
  percentage: number;
  time_taken_minutes: number;
  section_wise: { [key: string]: SectionResult };
  submitted_at: string;
  answers_review?: AnswerReview[];
}

export interface SectionResult {
  total: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
}

export interface ExamPreference {
  exam_ids: string[];
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class MocktestService {
  private baseUrl = 'https://campusapi.ohcampus.com/apps/';
  private mockTestApiUrl = ''; // Will be set when backend is available
  
  private currentUser = new BehaviorSubject<MockTestUser | null>(null);
  public currentUser$ = this.currentUser.asObservable();

  private examPreferences = new BehaviorSubject<ExamPreference | null>(null);
  public examPreferences$ = this.examPreferences.asObservable();

  // Mock data for demo
  private mockExams: Exam[] = [
    {
      exam_id: 'kcet_2026',
      name: 'KCET 2026',
      description: 'Karnataka Common Entrance Test - Practice for engineering and medical entrance',
      duration_minutes: 180,
      sections: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      total_questions: 60
    },
    {
      exam_id: 'neet_2026',
      name: 'NEET 2026',
      description: 'National Eligibility cum Entrance Test - Medical entrance exam practice',
      duration_minutes: 180,
      sections: ['Physics', 'Chemistry', 'Biology'],
      total_questions: 45
    },
    {
      exam_id: 'jee_main_2026',
      name: 'JEE Main 2026',
      description: 'Joint Entrance Examination Main - Engineering entrance exam practice',
      duration_minutes: 180,
      sections: ['Physics', 'Chemistry', 'Mathematics'],
      total_questions: 45
    }
  ];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.loadStoredUser();
    this.loadStoredPreferences();
  }

  private loadStoredUser(): void {
    const storedUser = localStorage.getItem('mocktest_user');
    if (storedUser) {
      this.currentUser.next(JSON.parse(storedUser));
    }
  }

  private loadStoredPreferences(): void {
    const storedPrefs = localStorage.getItem('mocktest_exam_preferences');
    if (storedPrefs) {
      this.examPreferences.next(JSON.parse(storedPrefs));
    }
  }

  // Get exam preferences
  getExamPreferences(): ExamPreference | null {
    return this.examPreferences.value;
  }

  // Set exam preferences
  setExamPreferences(examIds: string[]): Observable<any> {
    const prefs: ExamPreference = {
      exam_ids: examIds,
      updated_at: new Date().toISOString()
    };
    localStorage.setItem('mocktest_exam_preferences', JSON.stringify(prefs));
    this.examPreferences.next(prefs);
    return of({ success: true, preferences: prefs });
  }

  // Clear exam preferences
  clearExamPreferences(): void {
    localStorage.removeItem('mocktest_exam_preferences');
    this.examPreferences.next(null);
  }

  // Get preferred exam names
  getPreferredExamNames(): string[] {
    const prefs = this.examPreferences.value;
    if (!prefs || prefs.exam_ids.length === 0) return [];
    return prefs.exam_ids.map(id => {
      const exam = this.mockExams.find(e => e.exam_id === id);
      return exam ? exam.name : id;
    });
  }

  // Check if user has preferences set
  hasExamPreferences(): boolean {
    const prefs = this.examPreferences.value;
    return prefs !== null && prefs.exam_ids.length > 0;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.currentUser.value !== null;
  }

  // Get current user
  getCurrentUser(): MockTestUser | null {
    return this.currentUser.value;
  }

  // Register new user
  register(email: string, password: string, name: string): Observable<any> {
    // For now, use mock registration
    const user: MockTestUser = {
      user_id: 'user_' + Math.random().toString(36).substr(2, 12),
      email: email,
      name: name,
      token: 'mock_token_' + Math.random().toString(36).substr(2, 20)
    };
    
    localStorage.setItem('mocktest_user', JSON.stringify(user));
    this.currentUser.next(user);
    
    return of({ success: true, user: user });
  }

  // Login user
  login(email: string, password: string): Observable<any> {
    // For now, use mock login
    const user: MockTestUser = {
      user_id: 'user_' + Math.random().toString(36).substr(2, 12),
      email: email,
      name: email.split('@')[0],
      token: 'mock_token_' + Math.random().toString(36).substr(2, 20)
    };
    
    localStorage.setItem('mocktest_user', JSON.stringify(user));
    this.currentUser.next(user);
    
    return of({ success: true, user: user });
  }

  // Logout user
  logout(): void {
    localStorage.removeItem('mocktest_user');
    localStorage.removeItem('mocktest_current_test');
    this.currentUser.next(null);
  }

  // Get all exams
  getExams(): Observable<Exam[]> {
    // Return mock data for now
    return of(this.mockExams);
  }

  // Get all exams (unfiltered)
  getAllExams(): Observable<Exam[]> {
    return of(this.mockExams);
  }

  // Get filtered exams based on preferences
  getFilteredExams(): Observable<Exam[]> {
    const prefs = this.examPreferences.value;
    if (!prefs || prefs.exam_ids.length === 0) {
      return of(this.mockExams);
    }
    const filtered = this.mockExams.filter(e => prefs.exam_ids.includes(e.exam_id));
    return of(filtered.length > 0 ? filtered : this.mockExams);
  }

  // Get single exam details
  getExam(examId: string): Observable<Exam | undefined> {
    const exam = this.mockExams.find(e => e.exam_id === examId);
    return of(exam);
  }

  // Start a new test
  startTest(examId: string, sections?: string[]): Observable<TestSession> {
    const exam = this.mockExams.find(e => e.exam_id === examId);
    if (!exam) {
      throw new Error('Exam not found');
    }

    const questions = this.generateMockQuestions(examId, sections || exam.sections);
    
    const testSession: TestSession = {
      test_id: 'test_' + Math.random().toString(36).substr(2, 12),
      exam_id: examId,
      duration_minutes: exam.duration_minutes,
      total_questions: questions.length,
      questions: questions
    };

    // Store test session
    localStorage.setItem('mocktest_current_test', JSON.stringify({
      ...testSession,
      started_at: new Date().toISOString(),
      answers: {},
      marked_for_review: []
    }));

    return of(testSession);
  }

  // Get current test session
  getCurrentTest(): any {
    const stored = localStorage.getItem('mocktest_current_test');
    return stored ? JSON.parse(stored) : null;
  }

  // Save answer
  saveAnswer(testId: string, questionId: string, answer: number): Observable<any> {
    const test = this.getCurrentTest();
    if (test && test.test_id === testId) {
      test.answers[questionId] = answer;
      localStorage.setItem('mocktest_current_test', JSON.stringify(test));
    }
    return of({ success: true });
  }

  // Mark for review
  markForReview(testId: string, questionId: string, marked: boolean): Observable<any> {
    const test = this.getCurrentTest();
    if (test && test.test_id === testId) {
      if (marked) {
        if (!test.marked_for_review.includes(questionId)) {
          test.marked_for_review.push(questionId);
        }
      } else {
        test.marked_for_review = test.marked_for_review.filter((id: string) => id !== questionId);
      }
      localStorage.setItem('mocktest_current_test', JSON.stringify(test));
    }
    return of({ success: true });
  }

  // Submit test
  submitTest(testId: string): Observable<TestResult> {
    const test = this.getCurrentTest();
    if (!test || test.test_id !== testId) {
      throw new Error('Test not found');
    }

    const questions = test.questions;
    const answers = test.answers;
    
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let score = 0;
    let maxScore = 0;
    const sectionWise: { [key: string]: SectionResult } = {};
    const answersReview: AnswerReview[] = [];

    questions.forEach((q: Question) => {
      const section = q.section;
      if (!sectionWise[section]) {
        sectionWise[section] = { total: 0, attempted: 0, correct: 0, incorrect: 0, score: 0 };
      }
      
      sectionWise[section].total++;
      maxScore += q.marks;
      
      const userAnswer = answers[q.question_id];
      const isAnswered = userAnswer !== undefined && userAnswer !== null && userAnswer !== -1;
      const isCorrect = isAnswered && userAnswer === q.correct_answer;

      // Store answer review
      answersReview.push({
        question: q,
        user_answer: isAnswered ? userAnswer : null,
        is_correct: isCorrect
      });

      if (isAnswered) {
        sectionWise[section].attempted++;
        if (isCorrect) {
          totalCorrect++;
          score += q.marks;
          sectionWise[section].correct++;
          sectionWise[section].score += q.marks;
        } else {
          totalIncorrect++;
          score -= q.negative_marks;
          sectionWise[section].incorrect++;
          sectionWise[section].score -= q.negative_marks;
        }
      }
    });

    const startedAt = new Date(test.started_at);
    const timeTaken = Math.round((new Date().getTime() - startedAt.getTime()) / 60000);

    const result: TestResult = {
      result_id: 'result_' + Math.random().toString(36).substr(2, 12),
      test_id: testId,
      exam_id: test.exam_id,
      total_questions: questions.length,
      attempted: totalCorrect + totalIncorrect,
      correct: totalCorrect,
      incorrect: totalIncorrect,
      score: Math.max(0, score),
      max_score: maxScore,
      percentage: maxScore > 0 ? Math.round((Math.max(0, score) / maxScore) * 100) : 0,
      time_taken_minutes: timeTaken,
      section_wise: sectionWise,
      submitted_at: new Date().toISOString(),
      answers_review: answersReview
    };

    // Store result in history
    const history = this.getTestHistory();
    history.unshift(result);
    localStorage.setItem('mocktest_history', JSON.stringify(history));

    // Clear current test
    localStorage.removeItem('mocktest_current_test');

    return of(result);
  }

  // Get test history
  getTestHistory(): TestResult[] {
    const stored = localStorage.getItem('mocktest_history');
    return stored ? JSON.parse(stored) : [];
  }

  // Get test result by ID
  getTestResult(testId: string): Observable<TestResult | undefined> {
    const history = this.getTestHistory();
    const result = history.find(r => r.test_id === testId);
    return of(result);
  }

  // Get leaderboard
  getLeaderboard(examId?: string): Observable<any[]> {
    // Mock leaderboard data
    const leaderboard = [
      { rank: 1, name: 'Rahul Kumar', score: 240, percentage: 100, time_taken_minutes: 120, exam_id: 'kcet_2026' },
      { rank: 2, name: 'Priya Sharma', score: 232, percentage: 97, time_taken_minutes: 145, exam_id: 'kcet_2026' },
      { rank: 3, name: 'Amit Patel', score: 220, percentage: 92, time_taken_minutes: 160, exam_id: 'neet_2026' },
      { rank: 4, name: 'Sneha Reddy', score: 216, percentage: 90, time_taken_minutes: 150, exam_id: 'jee_main_2026' },
      { rank: 5, name: 'Karthik Nair', score: 208, percentage: 87, time_taken_minutes: 170, exam_id: 'kcet_2026' },
      { rank: 6, name: 'Divya Menon', score: 200, percentage: 83, time_taken_minutes: 165, exam_id: 'neet_2026' },
      { rank: 7, name: 'Vijay Singh', score: 196, percentage: 82, time_taken_minutes: 155, exam_id: 'jee_main_2026' },
      { rank: 8, name: 'Anjali Gupta', score: 188, percentage: 78, time_taken_minutes: 175, exam_id: 'kcet_2026' },
      { rank: 9, name: 'Rohan Das', score: 180, percentage: 75, time_taken_minutes: 168, exam_id: 'neet_2026' },
      { rank: 10, name: 'Meera Iyer', score: 176, percentage: 73, time_taken_minutes: 172, exam_id: 'jee_main_2026' }
    ];

    if (examId) {
      return of(leaderboard.filter(l => l.exam_id === examId));
    }
    return of(leaderboard);
  }

  // Generate mock questions
  private generateMockQuestions(examId: string, sections: string[]): Question[] {
    const questions: Question[] = [];
    const questionsPerSection = 15;

    sections.forEach(section => {
      for (let i = 1; i <= questionsPerSection; i++) {
        questions.push(this.createMockQuestion(examId, section, i));
      }
    });

    return questions;
  }

  private createMockQuestion(examId: string, section: string, index: number): Question {
    const questionTemplates: { [key: string]: { text: string; options: string[]; correct: number; explanation: string }[] } = {
      'Physics': [
        { 
          text: 'A particle moves with velocity v = (3i + 4j) m/s. What is the magnitude of velocity?',
          options: ['5 m/s', '7 m/s', '3.5 m/s', '4.5 m/s'],
          correct: 0,
          explanation: 'Magnitude = √(3² + 4²) = √25 = 5 m/s'
        },
        { 
          text: 'What is the SI unit of force?',
          options: ['Newton', 'Joule', 'Watt', 'Pascal'],
          correct: 0,
          explanation: 'The SI unit of force is Newton (N)'
        },
        { 
          text: 'Which of the following is a vector quantity?',
          options: ['Mass', 'Temperature', 'Velocity', 'Energy'],
          correct: 2,
          explanation: 'Velocity has both magnitude and direction, making it a vector quantity'
        }
      ],
      'Chemistry': [
        { 
          text: 'What is the molecular formula of glucose?',
          options: ['C6H12O6', 'C12H22O11', 'C6H6', 'CH4'],
          correct: 0,
          explanation: 'Glucose has the molecular formula C6H12O6'
        },
        { 
          text: 'Which element has the highest electronegativity?',
          options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
          correct: 1,
          explanation: 'Fluorine has the highest electronegativity value of 4.0'
        },
        { 
          text: 'What is the pH of a neutral solution?',
          options: ['0', '7', '14', '1'],
          correct: 1,
          explanation: 'A neutral solution has a pH of 7'
        }
      ],
      'Mathematics': [
        { 
          text: 'What is the derivative of x²?',
          options: ['2x', 'x', 'x²', '2x²'],
          correct: 0,
          explanation: 'd/dx(x²) = 2x using the power rule'
        },
        { 
          text: 'What is the integral of 2x?',
          options: ['x²', 'x² + C', '2x²', '2x² + C'],
          correct: 1,
          explanation: '∫2x dx = x² + C'
        },
        { 
          text: 'What is the value of sin(90°)?',
          options: ['0', '1', '-1', '0.5'],
          correct: 1,
          explanation: 'sin(90°) = 1'
        }
      ],
      'Biology': [
        { 
          text: 'What is the powerhouse of the cell?',
          options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi Body'],
          correct: 0,
          explanation: 'Mitochondria produce ATP, the energy currency of cells'
        },
        { 
          text: 'Which blood cells are responsible for immunity?',
          options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
          correct: 1,
          explanation: 'White blood cells (leukocytes) are responsible for immune response'
        },
        { 
          text: 'What is the basic structural and functional unit of life?',
          options: ['Tissue', 'Organ', 'Cell', 'Organism'],
          correct: 2,
          explanation: 'Cell is the basic structural and functional unit of life'
        }
      ]
    };

    const templates = questionTemplates[section] || questionTemplates['Physics'];
    const template = templates[index % templates.length];

    return {
      question_id: `q_${examId}_${section.toLowerCase()}_${index}`,
      exam_id: examId,
      section: section,
      question_text: `${section} Question ${index}: ${template.text}`,
      options: template.options,
      correct_answer: template.correct,
      explanation: template.explanation,
      difficulty: index % 3 === 0 ? 'hard' : index % 2 === 0 ? 'medium' : 'easy',
      marks: 4,
      negative_marks: 1
    };
  }
}
