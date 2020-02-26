import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroInf151PageRoutingModule } from './course-intro-inf151-routing.module';

import { CourseIntroInf151Page } from './course-intro-inf151.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroInf151PageRoutingModule
  ],
  declarations: [CourseIntroInf151Page]
})
export class CourseIntroInf151PageModule {}
