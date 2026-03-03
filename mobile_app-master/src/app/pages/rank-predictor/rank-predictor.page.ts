import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RankPredictorService, RankPredictorExam } from '../../services/rank-predictor.service';

@Component({
  selector: 'app-rank-predictor',
  templateUrl: './rank-predictor.page.html',
  styleUrls: ['./rank-predictor.page.scss'],
})
export class RankPredictorPage implements OnInit {
  exams: RankPredictorExam[] = [];
  filteredExams: RankPredictorExam[] = [];
  selectedCategory: string = 'all';
  isLoading: boolean = true;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private rankPredictorService: RankPredictorService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.rankPredictorService.isLoggedIn();
    this.loadExams();
  }

  ionViewWillEnter() {
    this.isLoggedIn = this.rankPredictorService.isLoggedIn();
  }

  loadExams() {
    this.isLoading = true;
    this.rankPredictorService.getExams().subscribe(exams => {
      this.exams = exams;
      this.filteredExams = exams;
      this.isLoading = false;
    });
  }

  filterByCategory() {
    if (this.selectedCategory === 'all') {
      this.filteredExams = this.exams;
    } else {
      this.filteredExams = this.exams.filter(exam => exam.category === this.selectedCategory);
    }
  }

  selectExam(exam: RankPredictorExam) {
    this.router.navigate(['/rank-predictor-form', exam.id]);
  }

  goToHistory() {
    this.router.navigate(['/rank-predictor-history']);
  }

  goToLogin() {
    // Navigate to login/welcome page
    this.router.navigate(['/welcomepage']);
  }

  goBack() {
    this.navCtrl.back();
  }
}
