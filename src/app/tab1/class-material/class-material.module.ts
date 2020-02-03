import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassMaterialPageRoutingModule } from './class-material-routing.module';

import { ClassMaterialPage } from './class-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassMaterialPageRoutingModule
  ],
  declarations: [ClassMaterialPage]
})
export class ClassMaterialPageModule {}
