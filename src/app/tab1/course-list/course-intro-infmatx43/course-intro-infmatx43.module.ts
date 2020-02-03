import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroInfmatx43PageRoutingModule } from './course-intro-infmatx43-routing.module';

import { CourseIntroInfmatx43Page } from './course-intro-infmatx43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroInfmatx43PageRoutingModule
  ],
  declarations: [CourseIntroInfmatx43Page]
})
export class CourseIntroInfmatx43PageModule {}
