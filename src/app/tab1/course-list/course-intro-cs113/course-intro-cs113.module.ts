import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs113PageRoutingModule } from './course-intro-cs113-routing.module';

import { CourseIntroCs113Page } from './course-intro-cs113.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs113PageRoutingModule
  ],
  declarations: [CourseIntroCs113Page]
})
export class CourseIntroCs113PageModule {}
