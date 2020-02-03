import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs31Page } from './course-intro-ics31.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs31Page
  },
  {
    path: 'dgkay',
    loadChildren: () => import('./dgkay/dgkay.module').then( m => m.DgkayPageModule)
  },
  {
    path: 'rwang',
    loadChildren: () => import('./rwang/rwang.module').then( m => m.RwangPageModule)
  },
  {
    path: 'igassko',
    loadChildren: () => import('./igassko/igassko.module').then( m => m.IgasskoPageModule)
  },
  {
    path: 'rklefstad',
    loadChildren: () => import('./rklefstad/rklefstad.module').then( m => m.RklefstadPageModule)
  },
  {
    path: 'salfaro',
    loadChildren: () => import('./salfaro/salfaro.module').then( m => m.SalfaroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs31PageRoutingModule {}
