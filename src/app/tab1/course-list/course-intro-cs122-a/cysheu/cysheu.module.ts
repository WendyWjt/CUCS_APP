import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CysheuPageRoutingModule } from './cysheu-routing.module';

import { CysheuPage } from './cysheu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CysheuPageRoutingModule
  ],
  declarations: [CysheuPage]
})
export class CysheuPageModule {}
