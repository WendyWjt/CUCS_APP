import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs116PageRoutingModule } from './course-intro-cs116-routing.module';

import { CourseIntroCs116Page } from './course-intro-cs116.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs116PageRoutingModule
  ],
  declarations: [CourseIntroCs116Page]
})
export class CourseIntroCs116PageModule {}
