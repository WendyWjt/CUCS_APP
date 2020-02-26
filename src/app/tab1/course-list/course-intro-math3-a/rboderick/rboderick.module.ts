import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RboderickPageRoutingModule } from './rboderick-routing.module';

import { RboderickPage } from './rboderick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RboderickPageRoutingModule
  ],
  declarations: [RboderickPage]
})
export class RboderickPageModule {}
