import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroStat120APageRoutingModule } from './course-intro-stat120-a-routing.module';

import { CourseIntroStat120APage } from './course-intro-stat120-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroStat120APageRoutingModule
  ],
  declarations: [CourseIntroStat120APage]
})
export class CourseIntroStat120APageModule {}
