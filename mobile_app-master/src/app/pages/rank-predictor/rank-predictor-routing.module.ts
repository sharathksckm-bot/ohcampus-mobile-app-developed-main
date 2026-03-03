import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankPredictorPage } from './rank-predictor.page';

const routes: Routes = [
  {
    path: '',
    component: RankPredictorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankPredictorPageRoutingModule {}
