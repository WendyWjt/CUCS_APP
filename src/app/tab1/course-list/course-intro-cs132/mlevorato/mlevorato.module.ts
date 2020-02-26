import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MlevoratoPageRoutingModule } from './mlevorato-routing.module';

import { MlevoratoPage } from './mlevorato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MlevoratoPageRoutingModule
  ],
  declarations: [MlevoratoPage]
})
export class MlevoratoPageModule {}
