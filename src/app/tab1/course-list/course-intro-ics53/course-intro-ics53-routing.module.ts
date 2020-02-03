import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs53Page } from './course-intro-ics53.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs53Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs53PageRoutingModule {}
