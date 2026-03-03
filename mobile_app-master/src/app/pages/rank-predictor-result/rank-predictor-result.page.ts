import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { PredictionResult } from '../../services/rank-predictor.service';

@Component({
  selector: 'app-rank-predictor-result',
  templateUrl: './rank-predictor-result.page.html',
  styleUrls: ['./rank-predictor-result.page.scss'],
})
export class RankPredictorResultPage implements OnInit {
  prediction: PredictionResult | null = null;
  inputItems: { label: string; value: string | number }[] = [];

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    // Get prediction data from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['prediction']) {
      this.prediction = navigation.extras.state['prediction'];
    }
  }

  ngOnInit() {
    if (this.prediction) {
      this.formatInputItems();
    }
  }

  formatInputItems() {
    if (!this.prediction) return;
    
    this.inputItems = [];
    const inputData = this.prediction.input_data;
    
    // Map field names to readable labels
    const labelMap: { [key: string]: string } = {
      'kcet_marks': 'KCET Marks',
      'pcm_marks': 'PCM Board Marks',
      'comedk_marks': 'COMEDK Marks',
      'jee_percentile': 'JEE Percentile',
      'jee_adv_marks': 'JEE Advanced Marks',
      'neet_score': 'NEET Score',
      'keam_marks': 'KEAM Marks'
    };
    
    for (const key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        this.inputItems.push({
          label: labelMap[key] || key,
          value: inputData[key]
        });
      }
    }
  }

  predictAgain() {
    if (this.prediction) {
      this.router.navigate(['/rank-predictor-form', this.prediction.exam.id]);
    }
  }

  viewHistory() {
    this.router.navigate(['/rank-predictor-history']);
  }

  tryAnotherExam() {
    this.router.navigate(['/rank-predictor']);
  }

  goToHome() {
    // Navigate back to the main home page
    this.router.navigate(['/tabs/tabs/tab1']);
  }

  goBack() {
    this.navCtrl.back();
  }

  goToPredictor() {
    this.router.navigate(['/rank-predictor']);
  }

  async shareResult() {
    if (!this.prediction) return;
    
    const shareText = `I predicted my ${this.prediction.exam.exam_name} rank using OhCampus Rank Predictor!\n\nPredicted Rank: ${this.prediction.predicted_rank}\nExpected Range: ${this.prediction.rank_range_low} - ${this.prediction.rank_range_high}\n\nPredict your rank now on OhCampus!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Rank Prediction - OhCampus',
          text: shareText
        });
      } catch (error) {
        // User cancelled or share failed
        this.copyToClipboard(shareText);
      }
    } else {
      this.copyToClipboard(shareText);
    }
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      const toast = await this.toastCtrl.create({
        message: 'Result copied to clipboard!',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    } catch {
      const toast = await this.toastCtrl.create({
        message: 'Unable to share. Please try again.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
