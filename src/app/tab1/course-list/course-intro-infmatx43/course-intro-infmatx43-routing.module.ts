import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroInfmatx43Page } from './course-intro-infmatx43.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroInfmatx43Page
  },
  {
    path: 'enavarro',
    loadChildren: () => import('./enavarro/enavarro.module').then( m => m.EnavarroPageModule)
  },
  {
    path: 'hziv',
    loadChildren: () => import('./hziv/hziv.module').then( m => m.HzivPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroInfmatx43PageRoutingModule {}
