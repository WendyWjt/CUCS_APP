import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs6dPageRoutingModule } from './course-intro-ics6d-routing.module';

import { CourseIntroIcs6dPage } from './course-intro-ics6d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs6dPageRoutingModule
  ],
  declarations: [CourseIntroIcs6dPage]
})
export class CourseIntroIcs6dPageModule {}
