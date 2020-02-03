import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpattisPageRoutingModule } from './rpattis-routing.module';

import { RpattisPage } from './rpattis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpattisPageRoutingModule
  ],
  declarations: [RpattisPage]
})
export class RpattisPageModule {}
