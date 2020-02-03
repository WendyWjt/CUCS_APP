import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbozorgzadehPageRoutingModule } from './ebozorgzadeh-routing.module';

import { EbozorgzadehPage } from './ebozorgzadeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbozorgzadehPageRoutingModule
  ],
  declarations: [EbozorgzadehPage]
})
export class EbozorgzadehPageModule {}
