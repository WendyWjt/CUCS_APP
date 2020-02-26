import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs132PageRoutingModule } from './course-intro-cs132-routing.module';

import { CourseIntroCs132Page } from './course-intro-cs132.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs132PageRoutingModule
  ],
  declarations: [CourseIntroCs132Page]
})
export class CourseIntroCs132PageModule {}
