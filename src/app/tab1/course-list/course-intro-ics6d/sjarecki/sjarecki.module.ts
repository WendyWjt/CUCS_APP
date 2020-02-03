import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SjareckiPageRoutingModule } from './sjarecki-routing.module';

import { SjareckiPage } from './sjarecki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SjareckiPageRoutingModule
  ],
  declarations: [SjareckiPage]
})
export class SjareckiPageModule {}
