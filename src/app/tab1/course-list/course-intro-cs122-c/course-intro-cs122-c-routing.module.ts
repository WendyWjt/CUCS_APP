import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs122CPage } from './course-intro-cs122-c.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs122CPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs122CPageRoutingModule {}
