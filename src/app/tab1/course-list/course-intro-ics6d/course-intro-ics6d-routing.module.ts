import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs6dPage } from './course-intro-ics6d.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs6dPage
  },
  {
    path: 'mdillencourt',
    loadChildren: () => import('./mdillencourt/mdillencourt.module').then( m => m.MdillencourtPageModule)
  },
  {
    path: 'sirani',
    loadChildren: () => import('./sirani/sirani.module').then( m => m.SiraniPageModule)
  },
  {
    path: 'igassko',
    loadChildren: () => import('./igassko/igassko.module').then( m => m.IgasskoPageModule)
  },
  {
    path: 'sjarecki',
    loadChildren: () => import('./sjarecki/sjarecki.module').then( m => m.SjareckiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs6dPageRoutingModule {}
