import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdillencourtPageRoutingModule } from './mdillencourt-routing.module';

import { MdillencourtPage } from './mdillencourt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdillencourtPageRoutingModule
  ],
  declarations: [MdillencourtPage]
})
export class MdillencourtPageModule {}
