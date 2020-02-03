import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs6bPageRoutingModule } from './course-intro-ics6b-routing.module';

import { CourseIntroIcs6bPage } from './course-intro-ics6b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs6bPageRoutingModule
  ],
  declarations: [CourseIntroIcs6bPage]
})
export class CourseIntroIcs6bPageModule {}
