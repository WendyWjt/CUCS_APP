import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs6bPage } from './course-intro-ics6b.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs6bPage
  },
  {
    path: 'whayes',
    loadChildren: () => import('./whayes/whayes.module').then( m => m.WhayesPageModule)
  },
  {
    path: 'aregan',
    loadChildren: () => import('./aregan/aregan.module').then( m => m.AreganPageModule)
  },
  {
    path: 'sirani',
    loadChildren: () => import('./sirani/sirani.module').then( m => m.SiraniPageModule)
  },
  {
    path: 'lbic',
    loadChildren: () => import('./lbic/lbic.module').then( m => m.LbicPageModule)
  },
  {
    path: 'igassko',
    loadChildren: () => import('./igassko/igassko.module').then( m => m.IgasskoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs6bPageRoutingModule {}
