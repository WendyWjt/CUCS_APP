import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs32PageRoutingModule } from './course-intro-ics32-routing.module';

import { CourseIntroIcs32Page } from './course-intro-ics32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs32PageRoutingModule
  ],
  declarations: [CourseIntroIcs32Page]
})
export class CourseIntroIcs32PageModule {}
