import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPredictorPageRoutingModule } from './rank-predictor-routing.module';

import { RankPredictorPage } from './rank-predictor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPredictorPageRoutingModule
  ],
  declarations: [RankPredictorPage]
})
export class RankPredictorPageModule {}
