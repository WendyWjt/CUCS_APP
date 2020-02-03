import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs45cPage } from './course-intro-ics45c.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs45cPage
  },
  {
    path: 'rklefstad',
    loadChildren: () => import('./rklefstad/rklefstad.module').then( m => m.RklefstadPageModule)
  },
  {
    path: 'zwu',
    loadChildren: () => import('./zwu/zwu.module').then( m => m.ZwuPageModule)
  },
  {
    path: 'athornton',
    loadChildren: () => import('./athornton/athornton.module').then( m => m.AthorntonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs45cPageRoutingModule {}
