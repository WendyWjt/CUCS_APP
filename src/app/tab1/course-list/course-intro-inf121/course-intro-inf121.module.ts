import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroInf121PageRoutingModule } from './course-intro-inf121-routing.module';

import { CourseIntroInf121Page } from './course-intro-inf121.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroInf121PageRoutingModule
  ],
  declarations: [CourseIntroInf121Page]
})
export class CourseIntroInf121PageModule {}
