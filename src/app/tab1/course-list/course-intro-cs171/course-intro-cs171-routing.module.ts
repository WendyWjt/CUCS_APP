import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs171Page } from './course-intro-cs171.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs171Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs171PageRoutingModule {}
