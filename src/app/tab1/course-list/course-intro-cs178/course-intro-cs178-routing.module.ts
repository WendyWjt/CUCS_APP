import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs178Page } from './course-intro-cs178.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs178Page
  },
  {
    path: 'esudderth',
    loadChildren: () => import('./esudderth/esudderth.module').then( m => m.EsudderthPageModule)
  },
  {
    path: 'athomas',
    loadChildren: () => import('./athomas/athomas.module').then( m => m.AthomasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs178PageRoutingModule {}
