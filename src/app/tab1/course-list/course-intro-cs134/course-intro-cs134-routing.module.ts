import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs134Page } from './course-intro-cs134.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs134Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs134PageRoutingModule {}
