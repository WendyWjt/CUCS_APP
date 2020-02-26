import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs161PageRoutingModule } from './course-intro-cs161-routing.module';

import { CourseIntroCs161Page } from './course-intro-cs161.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs161PageRoutingModule
  ],
  declarations: [CourseIntroCs161Page]
})
export class CourseIntroCs161PageModule {}
