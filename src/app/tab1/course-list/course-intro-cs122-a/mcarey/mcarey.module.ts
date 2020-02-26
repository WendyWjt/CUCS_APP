import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McareyPageRoutingModule } from './mcarey-routing.module';

import { McareyPage } from './mcarey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McareyPageRoutingModule
  ],
  declarations: [McareyPage]
})
export class McareyPageModule {}
