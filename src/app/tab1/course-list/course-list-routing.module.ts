import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseListPage } from './course-list.page';

const routes: Routes = [
  {
    path: '',
    component: CourseListPage
  },
  {
    path: 'course-intro-ics31',
    loadChildren: () => import('./course-intro-ics31/course-intro-ics31.module').then( m => m.CourseIntroIcs31PageModule)
  },
  {
    path: 'course-intro-ics6b',
    loadChildren: () => import('./course-intro-ics6b/course-intro-ics6b.module').then( m => m.CourseIntroIcs6bPageModule)
  },
  {
    path: 'course-intro-ics6d',
    loadChildren: () => import('./course-intro-ics6d/course-intro-ics6d.module').then( m => m.CourseIntroIcs6dPageModule)
  },
  {
    path: 'course-intro-ics6n',
    loadChildren: () => import('./course-intro-ics6n/course-intro-ics6n.module').then( m => m.CourseIntroIcs6nPageModule)
  },
  {
    path: 'course-intro-ics90',
    loadChildren: () => import('./course-intro-ics90/course-intro-ics90.module').then( m => m.CourseIntroIcs90PageModule)
  },
  {
    path: 'course-intro-ics32a',
    loadChildren: () => import('./course-intro-ics32a/course-intro-ics32a.module').then( m => m.CourseIntroIcs32aPageModule)
  },
  {
    path: 'course-intro-ics32',
    loadChildren: () => import('./course-intro-ics32/course-intro-ics32.module').then( m => m.CourseIntroIcs32PageModule)
  },
  {
    path: 'course-intro-ics33',
    loadChildren: () => import('./course-intro-ics33/course-intro-ics33.module').then( m => m.CourseIntroIcs33PageModule)
  },
  {
    path: 'course-intro-ics45c',
    loadChildren: () => import('./course-intro-ics45c/course-intro-ics45c.module').then( m => m.CourseIntroIcs45cPageModule)
  },
  {
    path: 'course-intro-ics45j',
    loadChildren: () => import('./course-intro-ics45j/course-intro-ics45j.module').then( m => m.CourseIntroIcs45jPageModule)
  },
  {
    path: 'course-intro-ics46',
    loadChildren: () => import('./course-intro-ics46/course-intro-ics46.module').then( m => m.CourseIntroIcs46PageModule)
  },
  {
    path: 'course-intro-infmatx43',
    loadChildren: () => import('./course-intro-infmatx43/course-intro-infmatx43.module').then( m => m.CourseIntroInfmatx43PageModule)
  },
  {
    path: 'course-intro-ics51',
    loadChildren: () => import('./course-intro-ics51/course-intro-ics51.module').then( m => m.CourseIntroIcs51PageModule)
  },
  {
    path: 'course-intro-ics53',
    loadChildren: () => import('./course-intro-ics53/course-intro-ics53.module').then( m => m.CourseIntroIcs53PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseListPageRoutingModule {}
