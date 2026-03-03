import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankPredictorFormPage } from './rank-predictor-form.page';

const routes: Routes = [
  {
    path: '',
    component: RankPredictorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankPredictorFormPageRoutingModule {}
