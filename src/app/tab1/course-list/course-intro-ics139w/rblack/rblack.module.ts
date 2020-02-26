import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RblackPageRoutingModule } from './rblack-routing.module';

import { RblackPage } from './rblack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RblackPageRoutingModule
  ],
  declarations: [RblackPage]
})
export class RblackPageModule {}
