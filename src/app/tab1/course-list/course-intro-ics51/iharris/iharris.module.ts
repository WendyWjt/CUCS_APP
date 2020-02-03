import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IharrisPageRoutingModule } from './iharris-routing.module';

import { IharrisPage } from './iharris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IharrisPageRoutingModule
  ],
  declarations: [IharrisPage]
})
export class IharrisPageModule {}
