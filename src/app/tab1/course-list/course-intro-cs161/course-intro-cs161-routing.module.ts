import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs161Page } from './course-intro-cs161.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs161Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs161PageRoutingModule {}
