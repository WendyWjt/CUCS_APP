import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiraniPageRoutingModule } from './sirani-routing.module';

import { SiraniPage } from './sirani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiraniPageRoutingModule
  ],
  declarations: [SiraniPage]
})
export class SiraniPageModule {}
