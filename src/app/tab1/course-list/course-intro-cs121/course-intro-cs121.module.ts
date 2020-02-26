import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs121PageRoutingModule } from './course-intro-cs121-routing.module';

import { CourseIntroCs121Page } from './course-intro-cs121.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs121PageRoutingModule
  ],
  declarations: [CourseIntroCs121Page]
})
export class CourseIntroCs121PageModule {}
