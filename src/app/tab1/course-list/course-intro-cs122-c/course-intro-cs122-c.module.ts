import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroCs122CPageRoutingModule } from './course-intro-cs122-c-routing.module';

import { CourseIntroCs122CPage } from './course-intro-cs122-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroCs122CPageRoutingModule
  ],
  declarations: [CourseIntroCs122CPage]
})
export class CourseIntroCs122CPageModule {}
