import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs141Page } from './course-intro-cs141.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs141Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs141PageRoutingModule {}
