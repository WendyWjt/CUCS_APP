import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZwuPageRoutingModule } from './zwu-routing.module';

import { ZwuPage } from './zwu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZwuPageRoutingModule
  ],
  declarations: [ZwuPage]
})
export class ZwuPageModule {}
