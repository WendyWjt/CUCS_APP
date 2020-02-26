import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroStat5Page } from './course-intro-stat5.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroStat5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroStat5PageRoutingModule {}
