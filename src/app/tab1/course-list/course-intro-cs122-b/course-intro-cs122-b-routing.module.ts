import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs122BPage } from './course-intro-cs122-b.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs122BPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs122BPageRoutingModule {}
