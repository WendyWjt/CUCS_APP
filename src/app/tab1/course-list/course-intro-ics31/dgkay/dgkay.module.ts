import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DgkayPageRoutingModule } from './dgkay-routing.module';

import { DgkayPage } from './dgkay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DgkayPageRoutingModule
  ],
  declarations: [DgkayPage]
})
export class DgkayPageModule {}
