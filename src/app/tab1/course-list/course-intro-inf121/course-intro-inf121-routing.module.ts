import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroInf121Page } from './course-intro-inf121.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroInf121Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroInf121PageRoutingModule {}
