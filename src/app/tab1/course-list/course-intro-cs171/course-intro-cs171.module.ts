import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs171PageRoutingModule } from './course-intro-cs171-routing.module';

import { CourseIntroCs171Page } from './course-intro-cs171.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs171PageRoutingModule
  ],
  declarations: [CourseIntroCs171Page]
})
export class CourseIntroCs171PageModule {}
