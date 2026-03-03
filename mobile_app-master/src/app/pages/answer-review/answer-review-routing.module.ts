import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerReviewPage } from './answer-review.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerReviewPageRoutingModule {}
