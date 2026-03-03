import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankPredictorFormPageRoutingModule } from './rank-predictor-form-routing.module';

import { RankPredictorFormPage } from './rank-predictor-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankPredictorFormPageRoutingModule
  ],
  declarations: [RankPredictorFormPage]
})
export class RankPredictorFormPageModule {}
