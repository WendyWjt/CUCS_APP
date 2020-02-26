import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroInf151Page } from './course-intro-inf151.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroInf151Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroInf151PageRoutingModule {}
