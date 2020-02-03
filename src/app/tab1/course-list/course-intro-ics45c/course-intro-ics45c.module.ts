import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs45cPageRoutingModule } from './course-intro-ics45c-routing.module';

import { CourseIntroIcs45cPage } from './course-intro-ics45c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs45cPageRoutingModule
  ],
  declarations: [CourseIntroIcs45cPage]
})
export class CourseIntroIcs45cPageModule {}
