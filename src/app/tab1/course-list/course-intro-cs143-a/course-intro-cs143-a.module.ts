import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs143APageRoutingModule } from './course-intro-cs143-a-routing.module';

import { CourseIntroCs143APage } from './course-intro-cs143-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs143APageRoutingModule
  ],
  declarations: [CourseIntroCs143APage]
})
export class CourseIntroCs143APageModule {}
