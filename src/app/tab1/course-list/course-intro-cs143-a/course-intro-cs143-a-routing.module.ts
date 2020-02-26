import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs143APage } from './course-intro-cs143-a.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs143APage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs143APageRoutingModule {}
