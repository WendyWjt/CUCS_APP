import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnicolauPageRoutingModule } from './anicolau-routing.module';

import { AnicolauPage } from './anicolau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnicolauPageRoutingModule
  ],
  declarations: [AnicolauPage]
})
export class AnicolauPageModule {}
