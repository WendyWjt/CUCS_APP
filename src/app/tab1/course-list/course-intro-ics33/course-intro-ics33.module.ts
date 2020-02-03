import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs33PageRoutingModule } from './course-intro-ics33-routing.module';

import { CourseIntroIcs33Page } from './course-intro-ics33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs33PageRoutingModule
  ],
  declarations: [CourseIntroIcs33Page]
})
export class CourseIntroIcs33PageModule {}
