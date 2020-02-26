import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroMath3APage } from './course-intro-math3-a.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroMath3APage
  },
  {
    path: 'rboderick',
    loadChildren: () => import('./rboderick/rboderick.module').then( m => m.RboderickPageModule)
  },
  {
    path: 'mkosters',
    loadChildren: () => import('./mkosters/mkosters.module').then( m => m.MkostersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroMath3APageRoutingModule {}
