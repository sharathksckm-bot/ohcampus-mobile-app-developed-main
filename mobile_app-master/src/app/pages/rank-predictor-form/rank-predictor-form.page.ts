import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { RankPredictorService, RankPredictorExam, ExamInputField } from '../../services/rank-predictor.service';

@Component({
  selector: 'app-rank-predictor-form',
  templateUrl: './rank-predictor-form.page.html',
  styleUrls: ['./rank-predictor-form.page.scss'],
})
export class RankPredictorFormPage implements OnInit {
  exam: RankPredictorExam | undefined;
  inputFields: ExamInputField[] = [];
  formValues: { [key: string]: number | null } = {};
  fieldErrors: { [key: string]: string } = {};
  isLoading: boolean = true;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private rankPredictorService: RankPredictorService
  ) {}

  ngOnInit() {
    const examId = this.route.snapshot.paramMap.get('examId');
    if (examId) {
      this.loadExamData(parseInt(examId, 10));
    } else {
      this.isLoading = false;
    }
  }

  loadExamData(examId: number) {
    this.isLoading = true;
    
    this.rankPredictorService.getExamById(examId).subscribe(exam => {
      this.exam = exam;
      
      if (exam) {
        this.rankPredictorService.getInputFields(examId).subscribe(fields => {
          this.inputFields = fields;
          // Initialize form values
          fields.forEach(field => {
            this.formValues[field.field_name] = null as any;
          });
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  validateField(field: ExamInputField) {
    const value = this.formValues[field.field_name];
    this.fieldErrors[field.field_name] = '';
    
    if (field.is_required && (value === null || value === undefined)) {
      this.fieldErrors[field.field_name] = 'This field is required';
      return;
    }
    
    if (field.field_type === 'number' && value !== null && value !== undefined) {
      if (value < field.min_marks) {
        this.fieldErrors[field.field_name] = `Minimum value is ${field.min_marks}`;
      } else if (value > field.max_marks) {
        this.fieldErrors[field.field_name] = `Maximum value is ${field.max_marks}`;
      }
    }
  }

  isFormValid(): boolean {
    let isValid = true;
    
    this.inputFields.forEach(field => {
      const value = this.formValues[field.field_name];
      
      if (field.is_required && (value === null || value === undefined)) {
        isValid = false;
      }
      
      if (field.field_type === 'number' && value !== null && value !== undefined) {
        if (value < field.min_marks || value > field.max_marks) {
          isValid = false;
        }
      }
      
      if (this.fieldErrors[field.field_name]) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  async submitForm() {
    if (!this.exam || !this.isFormValid()) {
      return;
    }

    // Validate all fields before submission
    this.inputFields.forEach(field => this.validateField(field));
    
    if (!this.isFormValid()) {
      const toast = await this.toastCtrl.create({
        message: 'Please fix the errors in the form',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
      return;
    }

    this.isSubmitting = true;

    try {
      this.rankPredictorService.predictRank(this.exam.id, this.formValues).subscribe(
        result => {
          this.isSubmitting = false;
          // Navigate to result page with the prediction data
          this.router.navigate(['/rank-predictor-result'], {
            state: { prediction: result }
          });
        },
        async error => {
          this.isSubmitting = false;
          const toast = await this.toastCtrl.create({
            message: 'Failed to predict rank. Please try again.',
            duration: 2000,
            color: 'danger'
          });
          await toast.present();
        }
      );
    } catch (error) {
      this.isSubmitting = false;
      const toast = await this.toastCtrl.create({
        message: 'An error occurred. Please try again.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
