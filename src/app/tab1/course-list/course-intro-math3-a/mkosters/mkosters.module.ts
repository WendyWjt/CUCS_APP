import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MkostersPageRoutingModule } from './mkosters-routing.module';

import { MkostersPage } from './mkosters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MkostersPageRoutingModule
  ],
  declarations: [MkostersPage]
})
export class MkostersPageModule {}
