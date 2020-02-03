import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs32Page } from './course-intro-ics32.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs32Page
  },
  {
    path: 'athornton',
    loadChildren: () => import('./athornton/athornton.module').then( m => m.AthorntonPageModule)
  },
  {
    path: 'sgmasague',
    loadChildren: () => import('./sgmasague/sgmasague.module').then( m => m.SgmasaguePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs32PageRoutingModule {}
