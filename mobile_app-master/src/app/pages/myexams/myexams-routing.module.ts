import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyexamsPage } from './myexams.page';

const routes: Routes = [
  {
    path: '',
    component: MyexamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyexamsPageRoutingModule {}
