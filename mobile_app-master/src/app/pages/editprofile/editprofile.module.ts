import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditprofilePageRoutingModule } from './editprofile-routing.module';
import { EditprofilePage } from './editprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditprofilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditprofilePageModule {}
