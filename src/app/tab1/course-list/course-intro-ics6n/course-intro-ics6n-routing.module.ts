import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs6nPage } from './course-intro-ics6n.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs6nPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs6nPageRoutingModule {}
