import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SgmasaguePageRoutingModule } from './sgmasague-routing.module';

import { SgmasaguePage } from './sgmasague.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SgmasaguePageRoutingModule
  ],
  declarations: [SgmasaguePage]
})
export class SgmasaguePageModule {}
