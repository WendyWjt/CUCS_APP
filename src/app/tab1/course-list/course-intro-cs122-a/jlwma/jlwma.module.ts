import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JlwmaPageRoutingModule } from './jlwma-routing.module';

import { JlwmaPage } from './jlwma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JlwmaPageRoutingModule
  ],
  declarations: [JlwmaPage]
})
export class JlwmaPageModule {}
