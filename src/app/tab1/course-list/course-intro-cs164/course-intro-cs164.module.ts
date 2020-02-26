import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs164PageRoutingModule } from './course-intro-cs164-routing.module';

import { CourseIntroCs164Page } from './course-intro-cs164.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs164PageRoutingModule
  ],
  declarations: [CourseIntroCs164Page]
})
export class CourseIntroCs164PageModule {}
