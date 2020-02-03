import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs45jPage } from './course-intro-ics45j.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs45jPage
  },
  {
    path: 'zwu',
    loadChildren: () => import('./zwu/zwu.module').then( m => m.ZwuPageModule)
  },
  {
    path: 'khermans',
    loadChildren: () => import('./khermans/khermans.module').then( m => m.KhermansPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs45jPageRoutingModule {}
