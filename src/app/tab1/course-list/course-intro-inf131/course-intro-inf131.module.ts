import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroInf131PageRoutingModule } from './course-intro-inf131-routing.module';

import { CourseIntroInf131Page } from './course-intro-inf131.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroInf131PageRoutingModule
  ],
  declarations: [CourseIntroInf131Page]
})
export class CourseIntroInf131PageModule {}
