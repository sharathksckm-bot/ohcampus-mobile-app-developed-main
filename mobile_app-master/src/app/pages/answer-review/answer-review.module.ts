import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnswerReviewPageRoutingModule } from './answer-review-routing.module';
import { AnswerReviewPage } from './answer-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnswerReviewPageRoutingModule
  ],
  declarations: [AnswerReviewPage]
})
export class AnswerReviewPageModule {}
