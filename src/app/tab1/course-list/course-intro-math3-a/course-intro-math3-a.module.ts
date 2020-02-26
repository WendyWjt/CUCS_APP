import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroMath3APageRoutingModule } from './course-intro-math3-a-routing.module';

import { CourseIntroMath3APage } from './course-intro-math3-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroMath3APageRoutingModule
  ],
  declarations: [CourseIntroMath3APage]
})
export class CourseIntroMath3APageModule {}
