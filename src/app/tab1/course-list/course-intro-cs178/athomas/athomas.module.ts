import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AthomasPageRoutingModule } from './athomas-routing.module';

import { AthomasPage } from './athomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AthomasPageRoutingModule
  ],
  declarations: [AthomasPage]
})
export class AthomasPageModule {}
