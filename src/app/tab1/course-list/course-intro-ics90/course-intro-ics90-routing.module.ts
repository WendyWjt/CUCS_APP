import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs90Page } from './course-intro-ics90.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs90Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs90PageRoutingModule {}
