import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs193Page } from './course-intro-ics193.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs193Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs193PageRoutingModule {}
