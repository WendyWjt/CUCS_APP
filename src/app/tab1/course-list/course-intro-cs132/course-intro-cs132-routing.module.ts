import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs132Page } from './course-intro-cs132.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs132Page
  },
  {
    path: 'mlevorato',
    loadChildren: () => import('./mlevorato/mlevorato.module').then( m => m.MlevoratoPageModule)
  },
  {
    path: 'sjordan',
    loadChildren: () => import('./sjordan/sjordan.module').then( m => m.SjordanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs132PageRoutingModule {}
