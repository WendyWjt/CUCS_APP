import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs53PageRoutingModule } from './course-intro-ics53-routing.module';

import { CourseIntroIcs53Page } from './course-intro-ics53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs53PageRoutingModule
  ],
  declarations: [CourseIntroIcs53Page]
})
export class CourseIntroIcs53PageModule {}
