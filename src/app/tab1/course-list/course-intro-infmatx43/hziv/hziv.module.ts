import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HzivPageRoutingModule } from './hziv-routing.module';

import { HzivPage } from './hziv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HzivPageRoutingModule
  ],
  declarations: [HzivPage]
})
export class HzivPageModule {}
