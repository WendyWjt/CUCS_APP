import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhermansPageRoutingModule } from './khermans-routing.module';

import { KhermansPage } from './khermans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhermansPageRoutingModule
  ],
  declarations: [KhermansPage]
})
export class KhermansPageModule {}
