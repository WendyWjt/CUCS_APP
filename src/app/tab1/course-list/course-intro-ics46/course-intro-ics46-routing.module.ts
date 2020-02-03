import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs46Page } from './course-intro-ics46.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs46Page
  },
  {
    path: 'rpattis',
    loadChildren: () => import('./rpattis/rpattis.module').then( m => m.RpattisPageModule)
  },
  {
    path: 'rklefstad',
    loadChildren: () => import('./rklefstad/rklefstad.module').then( m => m.RklefstadPageModule)
  },
  {
    path: 'athornton',
    loadChildren: () => import('./athornton/athornton.module').then( m => m.AthorntonPageModule)
  },
  {
    path: 'ssago',
    loadChildren: () => import('./ssago/ssago.module').then( m => m.SsagoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs46PageRoutingModule {}
