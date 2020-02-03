import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhayesPageRoutingModule } from './whayes-routing.module';

import { WhayesPage } from './whayes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhayesPageRoutingModule
  ],
  declarations: [WhayesPage]
})
export class WhayesPageModule {}
