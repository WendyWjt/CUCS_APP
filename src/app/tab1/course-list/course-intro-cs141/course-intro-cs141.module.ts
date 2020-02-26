import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs141PageRoutingModule } from './course-intro-cs141-routing.module';

import { CourseIntroCs141Page } from './course-intro-cs141.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs141PageRoutingModule
  ],
  declarations: [CourseIntroCs141Page]
})
export class CourseIntroCs141PageModule {}
