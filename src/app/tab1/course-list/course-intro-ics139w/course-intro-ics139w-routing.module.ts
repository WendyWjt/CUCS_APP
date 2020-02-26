import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs139wPage } from './course-intro-ics139w.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs139wPage
  },
  {
    path: 'khermans',
    loadChildren: () => import('./khermans/khermans.module').then( m => m.KhermansPageModule)
  },
  {
    path: 'salfaro',
    loadChildren: () => import('./salfaro/salfaro.module').then( m => m.SalfaroPageModule)
  },
  {
    path: 'rblack',
    loadChildren: () => import('./rblack/rblack.module').then( m => m.RblackPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs139wPageRoutingModule {}
