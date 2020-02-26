import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsudderthPageRoutingModule } from './esudderth-routing.module';

import { EsudderthPage } from './esudderth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsudderthPageRoutingModule
  ],
  declarations: [EsudderthPage]
})
export class EsudderthPageModule {}
