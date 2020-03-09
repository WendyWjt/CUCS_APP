import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersionInfoPageRoutingModule } from './version-info-routing.module';

import { VersionInfoPage } from './version-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersionInfoPageRoutingModule
  ],
  declarations: [VersionInfoPage]
})
export class VersionInfoPageModule {}
