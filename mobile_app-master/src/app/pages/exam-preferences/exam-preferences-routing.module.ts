import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamPreferencesPage } from './exam-preferences.page';

const routes: Routes = [
  {
    path: '',
    component: ExamPreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPreferencesPageRoutingModule {}
