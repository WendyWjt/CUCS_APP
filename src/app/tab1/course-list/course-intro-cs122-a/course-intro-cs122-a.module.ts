import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs122APageRoutingModule } from './course-intro-cs122-a-routing.module';

import { CourseIntroCs122APage } from './course-intro-cs122-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs122APageRoutingModule
  ],
  declarations: [CourseIntroCs122APage]
})
export class CourseIntroCs122APageModule {}
