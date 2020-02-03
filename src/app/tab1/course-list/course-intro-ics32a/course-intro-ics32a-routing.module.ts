import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs32aPage } from './course-intro-ics32a.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs32aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs32aPageRoutingModule {}
