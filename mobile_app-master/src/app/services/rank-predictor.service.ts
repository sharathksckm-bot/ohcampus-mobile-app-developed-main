import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// Interfaces
export interface RankPredictorExam {
  id: number;
  exam_name: string;
  exam_code: string;
  category: 'Engineering' | 'Medical' | 'Other';
  description: string;
  calculation_type: 'table' | 'formula';
  icon: string;
  color: string;
  is_active: boolean;
  display_order: number;
}

export interface ExamInputField {
  id: number;
  exam_id: number;
  field_name: string;
  field_label: string;
  field_type: 'number' | 'text' | 'select';
  placeholder: string;
  max_marks: number;
  min_marks: number;
  is_required: boolean;
  options?: string[];
  weight: number;
  display_order: number;
}

export interface RankData {
  id: number;
  exam_id: number;
  marks: number;
  rank_start: number;
  rank_end: number;
  year: number;
}

export interface PredictionResult {
  exam: RankPredictorExam;
  input_data: { [key: string]: number };
  calculated_score: number;
  predicted_rank: number;
  rank_range_low: number;
  rank_range_high: number;
  created_at: Date;
}

export interface UserPrediction extends PredictionResult {
  id: string;
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RankPredictorService {
  
  // Mock exams data
  private mockExams: RankPredictorExam[] = [
    {
      id: 1,
      exam_name: 'KCET',
      exam_code: 'kcet',
      category: 'Engineering',
      description: 'Karnataka Common Entrance Test for engineering admissions',
      calculation_type: 'formula',
      icon: 'school-outline',
      color: '#4361ee',
      is_active: true,
      display_order: 1
    },
    {
      id: 2,
      exam_name: 'COMEDK',
      exam_code: 'comedk',
      category: 'Engineering',
      description: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka',
      calculation_type: 'table',
      icon: 'build-outline',
      color: '#7c3aed',
      is_active: true,
      display_order: 2
    },
    {
      id: 3,
      exam_name: 'JEE Main',
      exam_code: 'jee_main',
      category: 'Engineering',
      description: 'Joint Entrance Examination for engineering colleges',
      calculation_type: 'table',
      icon: 'rocket-outline',
      color: '#f59e0b',
      is_active: true,
      display_order: 3
    },
    {
      id: 4,
      exam_name: 'JEE Advanced',
      exam_code: 'jee_advanced',
      category: 'Engineering',
      description: 'Joint Entrance Examination Advanced for IITs',
      calculation_type: 'table',
      icon: 'trophy-outline',
      color: '#ef4444',
      is_active: true,
      display_order: 4
    },
    {
      id: 5,
      exam_name: 'NEET UG',
      exam_code: 'neet_ug',
      category: 'Medical',
      description: 'National Eligibility cum Entrance Test for medical colleges',
      calculation_type: 'table',
      icon: 'medkit-outline',
      color: '#10b981',
      is_active: true,
      display_order: 5
    },
    {
      id: 6,
      exam_name: 'KEAM Medical',
      exam_code: 'keam_medical',
      category: 'Medical',
      description: 'Kerala Engineering Architecture Medical entrance exam',
      calculation_type: 'table',
      icon: 'fitness-outline',
      color: '#06b6d4',
      is_active: true,
      display_order: 6
    }
  ];

  // Mock input fields
  private mockInputFields: ExamInputField[] = [
    // KCET fields
    { id: 1, exam_id: 1, field_name: 'kcet_marks', field_label: 'KCET Marks', field_type: 'number', placeholder: 'Enter your KCET marks (0-180)', max_marks: 180, min_marks: 0, is_required: true, weight: 0.50, display_order: 1 },
    { id: 2, exam_id: 1, field_name: 'pcm_marks', field_label: 'PCM Board Marks', field_type: 'number', placeholder: 'Enter PCM marks (0-300)', max_marks: 300, min_marks: 0, is_required: true, weight: 0.50, display_order: 2 },
    // COMEDK fields
    { id: 3, exam_id: 2, field_name: 'comedk_marks', field_label: 'COMEDK Marks', field_type: 'number', placeholder: 'Enter your COMEDK marks (0-180)', max_marks: 180, min_marks: 0, is_required: true, weight: 1.00, display_order: 1 },
    // JEE Main fields
    { id: 4, exam_id: 3, field_name: 'jee_percentile', field_label: 'JEE Main Percentile', field_type: 'number', placeholder: 'Enter your percentile (0-100)', max_marks: 100, min_marks: 0, is_required: true, weight: 1.00, display_order: 1 },
    // JEE Advanced fields
    { id: 5, exam_id: 4, field_name: 'jee_adv_marks', field_label: 'JEE Advanced Marks', field_type: 'number', placeholder: 'Enter your marks (0-360)', max_marks: 360, min_marks: 0, is_required: true, weight: 1.00, display_order: 1 },
    // NEET UG fields
    { id: 6, exam_id: 5, field_name: 'neet_score', field_label: 'NEET Score', field_type: 'number', placeholder: 'Enter your NEET score (0-720)', max_marks: 720, min_marks: 0, is_required: true, weight: 1.00, display_order: 1 },
    // KEAM Medical fields
    { id: 7, exam_id: 6, field_name: 'keam_marks', field_label: 'KEAM Marks', field_type: 'number', placeholder: 'Enter your KEAM marks (0-480)', max_marks: 480, min_marks: 0, is_required: true, weight: 1.00, display_order: 1 }
  ];

  // Mock rank data
  private mockRankData: RankData[] = [
    // KCET
    { id: 1, exam_id: 1, marks: 200, rank_start: 1, rank_end: 100, year: 2025 },
    { id: 2, exam_id: 1, marks: 190, rank_start: 101, rank_end: 500, year: 2025 },
    { id: 3, exam_id: 1, marks: 180, rank_start: 501, rank_end: 1000, year: 2025 },
    { id: 4, exam_id: 1, marks: 170, rank_start: 1001, rank_end: 2500, year: 2025 },
    { id: 5, exam_id: 1, marks: 160, rank_start: 2501, rank_end: 5000, year: 2025 },
    { id: 6, exam_id: 1, marks: 150, rank_start: 5001, rank_end: 10000, year: 2025 },
    { id: 7, exam_id: 1, marks: 140, rank_start: 10001, rank_end: 20000, year: 2025 },
    { id: 8, exam_id: 1, marks: 130, rank_start: 20001, rank_end: 35000, year: 2025 },
    { id: 9, exam_id: 1, marks: 120, rank_start: 35001, rank_end: 50000, year: 2025 },
    { id: 10, exam_id: 1, marks: 110, rank_start: 50001, rank_end: 70000, year: 2025 },
    { id: 11, exam_id: 1, marks: 100, rank_start: 70001, rank_end: 100000, year: 2025 },
    // COMEDK
    { id: 12, exam_id: 2, marks: 170, rank_start: 1, rank_end: 100, year: 2025 },
    { id: 13, exam_id: 2, marks: 160, rank_start: 101, rank_end: 500, year: 2025 },
    { id: 14, exam_id: 2, marks: 150, rank_start: 501, rank_end: 1500, year: 2025 },
    { id: 15, exam_id: 2, marks: 140, rank_start: 1501, rank_end: 3000, year: 2025 },
    { id: 16, exam_id: 2, marks: 130, rank_start: 3001, rank_end: 6000, year: 2025 },
    { id: 17, exam_id: 2, marks: 120, rank_start: 6001, rank_end: 10000, year: 2025 },
    { id: 18, exam_id: 2, marks: 110, rank_start: 10001, rank_end: 15000, year: 2025 },
    { id: 19, exam_id: 2, marks: 100, rank_start: 15001, rank_end: 25000, year: 2025 },
    { id: 20, exam_id: 2, marks: 90, rank_start: 25001, rank_end: 40000, year: 2025 },
    { id: 21, exam_id: 2, marks: 80, rank_start: 40001, rank_end: 60000, year: 2025 },
    // JEE Main
    { id: 22, exam_id: 3, marks: 100, rank_start: 1, rank_end: 100, year: 2025 },
    { id: 23, exam_id: 3, marks: 99.9, rank_start: 101, rank_end: 1000, year: 2025 },
    { id: 24, exam_id: 3, marks: 99.5, rank_start: 1001, rank_end: 5000, year: 2025 },
    { id: 25, exam_id: 3, marks: 99, rank_start: 5001, rank_end: 10000, year: 2025 },
    { id: 26, exam_id: 3, marks: 98, rank_start: 10001, rank_end: 20000, year: 2025 },
    { id: 27, exam_id: 3, marks: 97, rank_start: 20001, rank_end: 35000, year: 2025 },
    { id: 28, exam_id: 3, marks: 95, rank_start: 35001, rank_end: 50000, year: 2025 },
    { id: 29, exam_id: 3, marks: 90, rank_start: 50001, rank_end: 100000, year: 2025 },
    { id: 30, exam_id: 3, marks: 85, rank_start: 100001, rank_end: 200000, year: 2025 },
    { id: 31, exam_id: 3, marks: 80, rank_start: 200001, rank_end: 350000, year: 2025 },
    // NEET UG
    { id: 32, exam_id: 5, marks: 700, rank_start: 1, rank_end: 100, year: 2025 },
    { id: 33, exam_id: 5, marks: 680, rank_start: 101, rank_end: 500, year: 2025 },
    { id: 34, exam_id: 5, marks: 660, rank_start: 501, rank_end: 2000, year: 2025 },
    { id: 35, exam_id: 5, marks: 640, rank_start: 2001, rank_end: 5000, year: 2025 },
    { id: 36, exam_id: 5, marks: 620, rank_start: 5001, rank_end: 10000, year: 2025 },
    { id: 37, exam_id: 5, marks: 600, rank_start: 10001, rank_end: 20000, year: 2025 },
    { id: 38, exam_id: 5, marks: 580, rank_start: 20001, rank_end: 40000, year: 2025 },
    { id: 39, exam_id: 5, marks: 550, rank_start: 40001, rank_end: 80000, year: 2025 },
    { id: 40, exam_id: 5, marks: 500, rank_start: 80001, rank_end: 150000, year: 2025 },
    { id: 41, exam_id: 5, marks: 450, rank_start: 150001, rank_end: 300000, year: 2025 }
  ];

  private predictionHistory: UserPrediction[] = [];
  private predictionHistorySubject = new BehaviorSubject<UserPrediction[]>([]);
  
  private apiUrl = environment.apiUrl;
  private useBackend = environment.useBackend;

  constructor(private http: HttpClient) {
    this.loadPredictionHistory();
  }

  // Get all active exams
  getExams(): Observable<RankPredictorExam[]> {
    if (this.useBackend) {
      return this.http.get<any>(`${this.apiUrl}/apps/rankpredictor/exams`).pipe(
        map(response => response.data || []),
        catchError(() => {
          // Fallback to mock data on error
          const activeExams = this.mockExams.filter(e => e.is_active).sort((a, b) => a.display_order - b.display_order);
          return of(activeExams);
        })
      );
    }
    const activeExams = this.mockExams.filter(e => e.is_active).sort((a, b) => a.display_order - b.display_order);
    return of(activeExams);
  }

  // Get exams by category
  getExamsByCategory(category: string): Observable<RankPredictorExam[]> {
    const exams = this.mockExams.filter(e => e.is_active && e.category === category).sort((a, b) => a.display_order - b.display_order);
    return of(exams);
  }

  // Get exam by ID
  getExamById(examId: number): Observable<RankPredictorExam | undefined> {
    if (this.useBackend) {
      return this.http.get<any>(`${this.apiUrl}/apps/rankpredictor/exam/${examId}`).pipe(
        map(response => response.data),
        catchError(() => {
          const exam = this.mockExams.find(e => e.id === examId);
          return of(exam);
        })
      );
    }
    const exam = this.mockExams.find(e => e.id === examId);
    return of(exam);
  }

  // Get exam by code
  getExamByCode(examCode: string): Observable<RankPredictorExam | undefined> {
    const exam = this.mockExams.find(e => e.exam_code === examCode);
    return of(exam);
  }

  // Get input fields for an exam
  getInputFields(examId: number): Observable<ExamInputField[]> {
    if (this.useBackend) {
      return this.http.get<any>(`${this.apiUrl}/apps/rankpredictor/fields/${examId}`).pipe(
        map(response => response.data || []),
        catchError(() => {
          const fields = this.mockInputFields.filter(f => f.exam_id === examId).sort((a, b) => a.display_order - b.display_order);
          return of(fields);
        })
      );
    }
    const fields = this.mockInputFields.filter(f => f.exam_id === examId).sort((a, b) => a.display_order - b.display_order);
    return of(fields);
  }

  // Get rank data for an exam
  getRankData(examId: number): Observable<RankData[]> {
    const data = this.mockRankData.filter(d => d.exam_id === examId).sort((a, b) => b.marks - a.marks);
    return of(data);
  }

  // Predict rank based on input
  predictRank(examId: number, inputData: { [key: string]: number }): Observable<PredictionResult> {
    const exam = this.mockExams.find(e => e.id === examId);
    if (!exam) {
      throw new Error('Exam not found');
    }

    const fields = this.mockInputFields.filter(f => f.exam_id === examId);
    let calculatedScore: number;

    if (exam.calculation_type === 'formula') {
      // Formula-based calculation (e.g., KCET: 50% CET + 50% Board normalized)
      calculatedScore = 0;
      fields.forEach(field => {
        const value = inputData[field.field_name] || 0;
        const normalizedValue = (value / field.max_marks) * 100 * field.weight;
        calculatedScore += normalizedValue;
      });
      // Convert back to marks scale (0-200 for KCET)
      calculatedScore = calculatedScore * 2;
    } else {
      // Table-based calculation - use the primary field value
      const primaryField = fields[0];
      calculatedScore = inputData[primaryField.field_name] || 0;
    }

    // Find rank from rank data using interpolation
    const rankData = this.mockRankData.filter(d => d.exam_id === examId).sort((a, b) => b.marks - a.marks);
    
    let predictedRank = 100000;
    let rankRangeLow = 100000;
    let rankRangeHigh = 150000;

    for (let i = 0; i < rankData.length; i++) {
      if (calculatedScore >= rankData[i].marks) {
        predictedRank = rankData[i].rank_start;
        rankRangeLow = rankData[i].rank_start;
        rankRangeHigh = rankData[i].rank_end;
        
        // Linear interpolation within range
        if (i > 0) {
          const upperMarks = rankData[i - 1].marks;
          const upperRank = rankData[i - 1].rank_start;
          const lowerMarks = rankData[i].marks;
          const lowerRank = rankData[i].rank_end;
          
          const ratio = (calculatedScore - lowerMarks) / (upperMarks - lowerMarks);
          predictedRank = Math.round(lowerRank - (lowerRank - upperRank) * ratio);
        }
        break;
      }
    }

    const result: PredictionResult = {
      exam,
      input_data: inputData,
      calculated_score: Math.round(calculatedScore * 100) / 100,
      predicted_rank: predictedRank,
      rank_range_low: rankRangeLow,
      rank_range_high: rankRangeHigh,
      created_at: new Date()
    };

    // Save to history
    this.savePrediction(result);

    return of(result);
  }

  // Save prediction to history
  private savePrediction(result: PredictionResult): void {
    const userPrediction: UserPrediction = {
      ...result,
      id: this.generateId(),
      user_id: this.getCurrentUserId()
    };
    this.predictionHistory.unshift(userPrediction);
    this.savePredictionHistory();
    this.predictionHistorySubject.next(this.predictionHistory);
  }

  // Get prediction history
  getPredictionHistory(): Observable<UserPrediction[]> {
    return this.predictionHistorySubject.asObservable();
  }

  // Load prediction history from localStorage
  private loadPredictionHistory(): void {
    try {
      const stored = localStorage.getItem('rank_prediction_history');
      if (stored) {
        this.predictionHistory = JSON.parse(stored).map((p: any) => ({
          ...p,
          created_at: new Date(p.created_at)
        }));
        this.predictionHistorySubject.next(this.predictionHistory);
      }
    } catch (e) {
      console.error('Error loading prediction history:', e);
    }
  }

  // Save prediction history to localStorage
  private savePredictionHistory(): void {
    try {
      localStorage.setItem('rank_prediction_history', JSON.stringify(this.predictionHistory));
    } catch (e) {
      console.error('Error saving prediction history:', e);
    }
  }

  // Clear prediction history
  clearHistory(): void {
    this.predictionHistory = [];
    localStorage.removeItem('rank_prediction_history');
    this.predictionHistorySubject.next([]);
  }

  // Delete a specific prediction
  deletePrediction(id: string): void {
    this.predictionHistory = this.predictionHistory.filter(p => p.id !== id);
    this.savePredictionHistory();
    this.predictionHistorySubject.next(this.predictionHistory);
  }

  // Helper methods
  private generateId(): string {
    return 'pred_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getCurrentUserId(): string {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return user.id || 'demo_user';
    } catch {
      return 'demo_user';
    }
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }

  // Get unique categories
  getCategories(): string[] {
    const categories = [...new Set(this.mockExams.filter(e => e.is_active).map(e => e.category))];
    return categories;
  }
}
