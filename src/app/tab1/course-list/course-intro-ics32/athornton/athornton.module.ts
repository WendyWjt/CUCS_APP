import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthorntonPageRoutingModule } from './athornton-routing.module';

import { AthorntonPage } from './athornton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthorntonPageRoutingModule
  ],
  declarations: [AthorntonPage]
})
export class AthorntonPageModule {}
