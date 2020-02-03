import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs32aPageRoutingModule } from './course-intro-ics32a-routing.module';

import { CourseIntroIcs32aPage } from './course-intro-ics32a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs32aPageRoutingModule
  ],
  declarations: [CourseIntroIcs32aPage]
})
export class CourseIntroIcs32aPageModule {}
