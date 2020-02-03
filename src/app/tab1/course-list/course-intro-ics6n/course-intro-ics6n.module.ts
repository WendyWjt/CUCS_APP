import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs6nPageRoutingModule } from './course-intro-ics6n-routing.module';

import { CourseIntroIcs6nPage } from './course-intro-ics6n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs6nPageRoutingModule
  ],
  declarations: [CourseIntroIcs6nPage]
})
export class CourseIntroIcs6nPageModule {}
