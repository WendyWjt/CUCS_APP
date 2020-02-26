import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs113Page } from './course-intro-cs113.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs113Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs113PageRoutingModule {}
