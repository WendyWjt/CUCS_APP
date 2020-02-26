import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs112Page } from './course-intro-cs112.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs112Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs112PageRoutingModule {}
