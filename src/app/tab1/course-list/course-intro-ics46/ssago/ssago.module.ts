import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsagoPageRoutingModule } from './ssago-routing.module';

import { SsagoPage } from './ssago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SsagoPageRoutingModule
  ],
  declarations: [SsagoPage]
})
export class SsagoPageModule {}
