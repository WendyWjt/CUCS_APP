import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnicolauPage } from './anicolau.page';

const routes: Routes = [
  {
    path: '',
    component: AnicolauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnicolauPageRoutingModule {}
