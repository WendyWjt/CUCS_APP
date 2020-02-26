import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroWritingPageRoutingModule } from './course-intro-writing-routing.module';

import { CourseIntroWritingPage } from './course-intro-writing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroWritingPageRoutingModule
  ],
  declarations: [CourseIntroWritingPage]
})
export class CourseIntroWritingPageModule {}
