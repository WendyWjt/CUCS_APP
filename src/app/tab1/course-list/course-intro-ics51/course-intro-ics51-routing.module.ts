import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseIntroIcs51Page } from './course-intro-ics51.page';

const routes: Routes = [
  {
    path: '',
    component: CourseIntroIcs51Page
  },
  {
    path: 'anicolau',
    loadChildren: () => import('./anicolau/anicolau.module').then( m => m.AnicolauPageModule)
  },
  {
    path: 'ebozorgzadeh',
    loadChildren: () => import('./ebozorgzadeh/ebozorgzadeh.module').then( m => m.EbozorgzadehPageModule)
  },
  {
    path: 'salfaro',
    loadChildren: () => import('./salfaro/salfaro.module').then( m => m.SalfaroPageModule)
  },
  {
    path: 'iharris',
    loadChildren: () => import('./iharris/iharris.module').then( m => m.IharrisPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseIntroIcs51PageRoutingModule {}
