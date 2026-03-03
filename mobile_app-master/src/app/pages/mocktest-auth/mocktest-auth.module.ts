import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MocktestAuthPageRoutingModule } from './mocktest-auth-routing.module';
import { MocktestAuthPage } from './mocktest-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MocktestAuthPageRoutingModule
  ],
  declarations: [MocktestAuthPage]
})
export class MocktestAuthPageModule {}
