import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs46PageRoutingModule } from './course-intro-ics46-routing.module';

import { CourseIntroIcs46Page } from './course-intro-ics46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs46PageRoutingModule
  ],
  declarations: [CourseIntroIcs46Page]
})
export class CourseIntroIcs46PageModule {}
