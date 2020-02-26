import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs134PageRoutingModule } from './course-intro-cs134-routing.module';

import { CourseIntroCs134Page } from './course-intro-cs134.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs134PageRoutingModule
  ],
  declarations: [CourseIntroCs134Page]
})
export class CourseIntroCs134PageModule {}
