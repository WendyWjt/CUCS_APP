import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs122BPageRoutingModule } from './course-intro-cs122-b-routing.module';

import { CourseIntroCs122BPage } from './course-intro-cs122-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs122BPageRoutingModule
  ],
  declarations: [CourseIntroCs122BPage]
})
export class CourseIntroCs122BPageModule {}
