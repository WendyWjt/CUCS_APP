import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnavarroPageRoutingModule } from './enavarro-routing.module';

import { EnavarroPage } from './enavarro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnavarroPageRoutingModule
  ],
  declarations: [EnavarroPage]
})
export class EnavarroPageModule {}
