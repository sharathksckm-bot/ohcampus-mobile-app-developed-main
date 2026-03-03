import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExamPreferencesPageRoutingModule } from './exam-preferences-routing.module';
import { ExamPreferencesPage } from './exam-preferences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPreferencesPageRoutingModule
  ],
  declarations: [ExamPreferencesPage]
})
export class ExamPreferencesPageModule {}
