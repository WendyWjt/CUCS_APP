import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs164Page } from './course-intro-cs164.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs164Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs164PageRoutingModule {}
