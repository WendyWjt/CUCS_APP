import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroCs121Page } from './course-intro-cs121.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroCs121Page
  },
  {
    path: 'sgmasague',
    loadChildren: () => import('./sgmasague/sgmasague.module').then( m => m.SgmasaguePageModule)
  },
  {
    path: 'mibrahim',
    loadChildren: () => import('./mibrahim/mibrahim.module').then( m => m.MibrahimPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroCs121PageRoutingModule {}
