import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroStat120APage } from './course-intro-stat120-a.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroStat120APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroStat120APageRoutingModule {}
