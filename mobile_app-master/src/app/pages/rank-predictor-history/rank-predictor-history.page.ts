import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { RankPredictorService, UserPrediction } from '../../services/rank-predictor.service';

@Component({
  selector: 'app-rank-predictor-history',
  templateUrl: './rank-predictor-history.page.html',
  styleUrls: ['./rank-predictor-history.page.scss'],
})
export class RankPredictorHistoryPage implements OnInit, OnDestroy {
  predictions: UserPrediction[] = [];
  isLoading: boolean = true;
  private subscription: Subscription | null = null;

  // Label mapping for display
  private labelMap: { [key: string]: string } = {
    'kcet_marks': 'KCET',
    'pcm_marks': 'PCM',
    'comedk_marks': 'COMEDK',
    'jee_percentile': 'Percentile',
    'jee_adv_marks': 'Marks',
    'neet_score': 'Score',
    'keam_marks': 'KEAM'
  };

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private rankPredictorService: RankPredictorService
  ) {}

  ngOnInit() {
    this.loadHistory();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadHistory() {
    this.isLoading = true;
    this.subscription = this.rankPredictorService.getPredictionHistory().subscribe(predictions => {
      this.predictions = predictions;
      this.isLoading = false;
    });
  }

  getInputSummary(prediction: UserPrediction): { label: string; value: number }[] {
    const items: { label: string; value: number }[] = [];
    for (const key in prediction.input_data) {
      if (prediction.input_data.hasOwnProperty(key)) {
        items.push({
          label: this.labelMap[key] || key,
          value: prediction.input_data[key]
        });
      }
    }
    return items;
  }

  async deletePrediction(event: Event, predictionId: string) {
    event.stopPropagation();
    
    const alert = await this.alertCtrl.create({
      header: 'Delete Prediction',
      message: 'Are you sure you want to delete this prediction?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.rankPredictorService.deletePrediction(predictionId);
            this.showToast('Prediction deleted');
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmClearHistory() {
    const alert = await this.alertCtrl.create({
      header: 'Clear History',
      message: 'Are you sure you want to clear all prediction history? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Clear All',
          role: 'destructive',
          handler: () => {
            this.rankPredictorService.clearHistory();
            this.showToast('History cleared');
          }
        }
      ]
    });
    await alert.present();
  }

  repeatPrediction(prediction: UserPrediction) {
    this.router.navigate(['/rank-predictor-form', prediction.exam.id]);
  }

  goToPredictor() {
    this.router.navigate(['/rank-predictor']);
  }

  goBack() {
    this.navCtrl.back();
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}
