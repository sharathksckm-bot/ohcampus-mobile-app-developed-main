import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestInterfacePage } from './test-interface.page';

const routes: Routes = [
  {
    path: '',
    component: TestInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestInterfacePageRoutingModule {}
