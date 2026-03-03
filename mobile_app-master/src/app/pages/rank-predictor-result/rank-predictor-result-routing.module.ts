import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankPredictorResultPage } from './rank-predictor-result.page';

const routes: Routes = [
  {
    path: '',
    component: RankPredictorResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankPredictorResultPageRoutingModule {}
