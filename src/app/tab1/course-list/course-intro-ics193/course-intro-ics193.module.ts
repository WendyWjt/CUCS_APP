import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs193PageRoutingModule } from './course-intro-ics193-routing.module';

import { CourseIntroIcs193Page } from './course-intro-ics193.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs193PageRoutingModule
  ],
  declarations: [CourseIntroIcs193Page]
})
export class CourseIntroIcs193PageModule {}
