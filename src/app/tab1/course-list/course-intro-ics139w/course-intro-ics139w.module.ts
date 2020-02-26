import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs139wPageRoutingModule } from './course-intro-ics139w-routing.module';

import { CourseIntroIcs139wPage } from './course-intro-ics139w.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs139wPageRoutingModule
  ],
  declarations: [CourseIntroIcs139wPage]
})
export class CourseIntroIcs139wPageModule {}
