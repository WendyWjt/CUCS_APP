import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs31PageRoutingModule } from './course-intro-ics31-routing.module';

import { CourseIntroIcs31Page } from './course-intro-ics31.page';

import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseIntroIcs31PageRoutingModule
  ],
  declarations: [CourseIntroIcs31Page]
})
export class CourseIntroIcs31PageModule {

}