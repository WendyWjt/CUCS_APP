import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SjordanPageRoutingModule } from './sjordan-routing.module';

import { SjordanPage } from './sjordan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SjordanPageRoutingModule
  ],
  declarations: [SjordanPage]
})
export class SjordanPageModule {}
