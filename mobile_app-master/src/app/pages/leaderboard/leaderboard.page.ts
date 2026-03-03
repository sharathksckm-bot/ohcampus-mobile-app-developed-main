import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MocktestService, Exam } from '../../services/mocktest.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  leaderboard: any[] = [];
  exams: Exam[] = [];
  selectedExam: string = '';
  isLoading = true;

  constructor(
    private router: Router,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    this.loadExams();
    this.loadLeaderboard();
  }

  loadExams() {
    this.mocktestService.getExams().subscribe(exams => {
      this.exams = exams;
    });
  }

  loadLeaderboard(examId?: string) {
    this.isLoading = true;
    this.mocktestService.getLeaderboard(examId).subscribe(leaderboard => {
      this.leaderboard = leaderboard;
      this.isLoading = false;
    });
  }

  filterByExam(event: any) {
    const examId = event.detail.value;
    this.selectedExam = examId;
    this.loadLeaderboard(examId || undefined);
  }

  getRankBadge(rank: number): string {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return rank.toString();
    }
  }

  getRankClass(rank: number): string {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return '';
  }

  goBack() {
    this.router.navigate(['/mocktest']);
  }
}
