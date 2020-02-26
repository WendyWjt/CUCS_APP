import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroStat5PageRoutingModule } from './course-intro-stat5-routing.module';

import { CourseIntroStat5Page } from './course-intro-stat5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroStat5PageRoutingModule
  ],
  declarations: [CourseIntroStat5Page]
})
export class CourseIntroStat5PageModule {}
