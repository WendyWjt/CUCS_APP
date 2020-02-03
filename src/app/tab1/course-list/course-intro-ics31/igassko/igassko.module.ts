import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IgasskoPageRoutingModule } from './igassko-routing.module';

import { IgasskoPage } from './igassko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IgasskoPageRoutingModule
  ],
  declarations: [IgasskoPage]
})
export class IgasskoPageModule {}
