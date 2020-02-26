import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroInf131Page } from './course-intro-inf131.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroInf131Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroInf131PageRoutingModule {}
