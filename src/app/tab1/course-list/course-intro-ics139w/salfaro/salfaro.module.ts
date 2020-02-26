import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalfaroPageRoutingModule } from './salfaro-routing.module';

import { SalfaroPage } from './salfaro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalfaroPageRoutingModule
  ],
  declarations: [SalfaroPage]
})
export class SalfaroPageModule {}
