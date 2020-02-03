import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RwangPageRoutingModule } from './rwang-routing.module';

import { RwangPage } from './rwang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RwangPageRoutingModule
  ],
  declarations: [RwangPage]
})
export class RwangPageModule {}
