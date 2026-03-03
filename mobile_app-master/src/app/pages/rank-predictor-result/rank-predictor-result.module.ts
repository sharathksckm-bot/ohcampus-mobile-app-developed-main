import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPredictorResultPageRoutingModule } from './rank-predictor-result-routing.module';

import { RankPredictorResultPage } from './rank-predictor-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPredictorResultPageRoutingModule
  ],
  declarations: [RankPredictorResultPage]
})
export class RankPredictorResultPageModule {}
