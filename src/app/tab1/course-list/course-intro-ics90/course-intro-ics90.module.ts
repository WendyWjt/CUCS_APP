import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs90PageRoutingModule } from './course-intro-ics90-routing.module';

import { CourseIntroIcs90Page } from './course-intro-ics90.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs90PageRoutingModule
  ],
  declarations: [CourseIntroIcs90Page]
})
export class CourseIntroIcs90PageModule {}
