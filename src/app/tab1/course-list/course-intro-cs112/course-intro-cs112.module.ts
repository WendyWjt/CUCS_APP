import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs112PageRoutingModule } from './course-intro-cs112-routing.module';

import { CourseIntroCs112Page } from './course-intro-cs112.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs112PageRoutingModule
  ],
  declarations: [CourseIntroCs112Page]
})
export class CourseIntroCs112PageModule {}
