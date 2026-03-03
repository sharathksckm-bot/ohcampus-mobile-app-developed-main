import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestInterfacePageRoutingModule } from './test-interface-routing.module';
import { TestInterfacePage } from './test-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestInterfacePageRoutingModule
  ],
  declarations: [TestInterfacePage]
})
export class TestInterfacePageModule {}
