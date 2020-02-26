import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs178PageRoutingModule } from './course-intro-cs178-routing.module';

import { CourseIntroCs178Page } from './course-intro-cs178.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs178PageRoutingModule
  ],
  declarations: [CourseIntroCs178Page]
})
export class CourseIntroCs178PageModule {}
