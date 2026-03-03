import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPredictorHistoryPageRoutingModule } from './rank-predictor-history-routing.module';

import { RankPredictorHistoryPage } from './rank-predictor-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPredictorHistoryPageRoutingModule
  ],
  declarations: [RankPredictorHistoryPage]
})
export class RankPredictorHistoryPageModule {}
