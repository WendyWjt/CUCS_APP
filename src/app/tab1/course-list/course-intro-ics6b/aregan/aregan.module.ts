import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreganPageRoutingModule } from './aregan-routing.module';

import { AreganPage } from './aregan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreganPageRoutingModule
  ],
  declarations: [AreganPage]
})
export class AreganPageModule {}
