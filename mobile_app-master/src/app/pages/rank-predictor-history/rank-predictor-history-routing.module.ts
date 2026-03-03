import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankPredictorHistoryPage } from './rank-predictor-history.page';

const routes: Routes = [
  {
    path: '',
    component: RankPredictorHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankPredictorHistoryPageRoutingModule {}
