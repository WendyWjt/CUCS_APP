import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs116Page } from './course-intro-cs116.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs116Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs116PageRoutingModule {}
