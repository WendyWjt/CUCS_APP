import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs33Page } from './course-intro-ics33.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs33PageRoutingModule {}
