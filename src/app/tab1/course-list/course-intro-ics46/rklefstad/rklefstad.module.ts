import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RklefstadPageRoutingModule } from './rklefstad-routing.module';

import { RklefstadPage } from './rklefstad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RklefstadPageRoutingModule
  ],
  declarations: [RklefstadPage]
})
export class RklefstadPageModule {}
