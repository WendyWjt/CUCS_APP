import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs45jPageRoutingModule } from './course-intro-ics45j-routing.module';

import { CourseIntroIcs45jPage } from './course-intro-ics45j.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs45jPageRoutingModule
  ],
  declarations: [CourseIntroIcs45jPage]
})
export class CourseIntroIcs45jPageModule {}
