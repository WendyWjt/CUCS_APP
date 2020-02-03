import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LbicPageRoutingModule } from './lbic-routing.module';

import { LbicPage } from './lbic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LbicPageRoutingModule
  ],
  declarations: [LbicPage]
})
export class LbicPageModule {}
