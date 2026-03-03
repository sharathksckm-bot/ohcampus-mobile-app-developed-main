import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MocktestAuthPage } from './mocktest-auth.page';

const routes: Routes = [
  {
    path: '',
    component: MocktestAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MocktestAuthPageRoutingModule {}
