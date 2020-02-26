import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs122APage } from './course-intro-cs122-a.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs122APage
  },
  {
    path: 'mcarey',
    loadChildren: () => import('./mcarey/mcarey.module').then( m => m.McareyPageModule)
  },
  {
    path: 'cysheu',
    loadChildren: () => import('./cysheu/cysheu.module').then( m => m.CysheuPageModule)
  },
  {
    path: 'jlwma',
    loadChildren: () => import('./jlwma/jlwma.module').then( m => m.JlwmaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs122APageRoutingModule {}
