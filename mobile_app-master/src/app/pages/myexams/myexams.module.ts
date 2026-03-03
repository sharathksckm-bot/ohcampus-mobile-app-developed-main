import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyexamsPageRoutingModule } from './myexams-routing.module';

import { MyexamsPage } from './myexams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyexamsPageRoutingModule
  ],
  declarations: [MyexamsPage]
})
export class MyexamsPageModule {}
