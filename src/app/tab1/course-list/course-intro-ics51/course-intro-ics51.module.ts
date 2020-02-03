import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs51PageRoutingModule } from './course-intro-ics51-routing.module';

import { CourseIntroIcs51Page } from './course-intro-ics51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs51PageRoutingModule
  ],
  declarations: [CourseIntroIcs51Page]
})
export class CourseIntroIcs51PageModule {}
