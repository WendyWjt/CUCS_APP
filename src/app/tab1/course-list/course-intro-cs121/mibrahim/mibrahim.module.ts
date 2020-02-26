import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MibrahimPageRoutingModule } from './mibrahim-routing.module';

import { MibrahimPage } from './mibrahim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MibrahimPageRoutingModule
  ],
  declarations: [MibrahimPage]
})
export class MibrahimPageModule {}
