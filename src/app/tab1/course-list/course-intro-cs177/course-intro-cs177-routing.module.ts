import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs177Page } from './course-intro-cs177.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs177Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs177PageRoutingModule {}
