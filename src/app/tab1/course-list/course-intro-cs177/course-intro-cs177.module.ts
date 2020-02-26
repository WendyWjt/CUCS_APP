import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs177PageRoutingModule } from './course-intro-cs177-routing.module';

import { CourseIntroCs177Page } from './course-intro-cs177.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs177PageRoutingModule
  ],
  declarations: [CourseIntroCs177Page]
})
export class CourseIntroCs177PageModule {}
