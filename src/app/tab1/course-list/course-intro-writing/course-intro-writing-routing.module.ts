import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroWritingPage } from './course-intro-writing.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroWritingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroWritingPageRoutingModule {}
