import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs162PageRoutingModule } from './course-intro-cs162-routing.module';

import { CourseIntroCs162Page } from './course-intro-cs162.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs162PageRoutingModule
  ],
  declarations: [CourseIntroCs162Page]
})
export class CourseIntroCs162PageModule {}
