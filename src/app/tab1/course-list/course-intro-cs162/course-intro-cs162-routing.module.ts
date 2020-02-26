import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs162Page } from './course-intro-cs162.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs162Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs162PageRoutingModule {}
