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
  },
  {
    path: 'course-intro-ics139w',
    loadChildren: () => import('./course-intro-ics139w/course-intro-ics139w.module').then( m => m.CourseIntroIcs139wPageModule)
  },
  {
    path: 'course-intro-cs112',
    loadChildren: () => import('./course-intro-cs112/course-intro-cs112.module').then( m => m.CourseIntroCs112PageModule)
  },
  {
    path: 'course-intro-cs113',
    loadChildren: () => import('./course-intro-cs113/course-intro-cs113.module').then( m => m.CourseIntroCs113PageModule)
  },
  {
    path: 'course-intro-cs116',
    loadChildren: () => import('./course-intro-cs116/course-intro-cs116.module').then( m => m.CourseIntroCs116PageModule)
  },
  {
    path: 'course-intro-cs121',
    loadChildren: () => import('./course-intro-cs121/course-intro-cs121.module').then( m => m.CourseIntroCs121PageModule)
  },
  {
    path: 'course-intro-cs122-a',
    loadChildren: () => import('./course-intro-cs122-a/course-intro-cs122-a.module').then( m => m.CourseIntroCs122APageModule)
  },
  {
    path: 'course-intro-cs122-b',
    loadChildren: () => import('./course-intro-cs122-b/course-intro-cs122-b.module').then( m => m.CourseIntroCs122BPageModule)
  },
  {
    path: 'course-intro-cs122-c',
    loadChildren: () => import('./course-intro-cs122-c/course-intro-cs122-c.module').then( m => m.CourseIntroCs122CPageModule)
  },
  {
    path: 'course-intro-cs132',
    loadChildren: () => import('./course-intro-cs132/course-intro-cs132.module').then( m => m.CourseIntroCs132PageModule)
  },
  {
    path: 'course-intro-cs134',
    loadChildren: () => import('./course-intro-cs134/course-intro-cs134.module').then( m => m.CourseIntroCs134PageModule)
  },
  {
    path: 'course-intro-cs141',
    loadChildren: () => import('./course-intro-cs141/course-intro-cs141.module').then( m => m.CourseIntroCs141PageModule)
  },
  {
    path: 'course-intro-cs161',
    loadChildren: () => import('./course-intro-cs161/course-intro-cs161.module').then( m => m.CourseIntroCs161PageModule)
  },
  {
    path: 'course-intro-cs162',
    loadChildren: () => import('./course-intro-cs162/course-intro-cs162.module').then( m => m.CourseIntroCs162PageModule)
  },
  {
    path: 'course-intro-cs164',
    loadChildren: () => import('./course-intro-cs164/course-intro-cs164.module').then( m => m.CourseIntroCs164PageModule)
  },
  {
    path: 'course-intro-cs171',
    loadChildren: () => import('./course-intro-cs171/course-intro-cs171.module').then( m => m.CourseIntroCs171PageModule)
  },
  {
    path: 'course-intro-cs177',
    loadChildren: () => import('./course-intro-cs177/course-intro-cs177.module').then( m => m.CourseIntroCs177PageModule)
  },
  {
    path: 'course-intro-cs178',
    loadChildren: () => import('./course-intro-cs178/course-intro-cs178.module').then( m => m.CourseIntroCs178PageModule)
  },
  {
    path: 'course-intro-ics193',
    loadChildren: () => import('./course-intro-ics193/course-intro-ics193.module').then( m => m.CourseIntroIcs193PageModule)
  },
  {
    path: 'course-intro-cs143-a',
    loadChildren: () => import('./course-intro-cs143-a/course-intro-cs143-a.module').then( m => m.CourseIntroCs143APageModule)
  },
  {
    path: 'course-intro-inf121',
    loadChildren: () => import('./course-intro-inf121/course-intro-inf121.module').then( m => m.CourseIntroInf121PageModule)
  },
  {
    path: 'course-intro-inf131',
    loadChildren: () => import('./course-intro-inf131/course-intro-inf131.module').then( m => m.CourseIntroInf131PageModule)
  },
  {
    path: 'course-intro-inf151',
    loadChildren: () => import('./course-intro-inf151/course-intro-inf151.module').then( m => m.CourseIntroInf151PageModule)
  },
  {
    path: 'course-intro-math3-a',
    loadChildren: () => import('./course-intro-math3-a/course-intro-math3-a.module').then( m => m.CourseIntroMath3APageModule)
  },
  {
    path: 'course-intro-stat5',
    loadChildren: () => import('./course-intro-stat5/course-intro-stat5.module').then( m => m.CourseIntroStat5PageModule)
  },
  {
    path: 'course-intro-stat120-a',
    loadChildren: () => import('./course-intro-stat120-a/course-intro-stat120-a.module').then( m => m.CourseIntroStat120APageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseListPageRoutingModule {}
