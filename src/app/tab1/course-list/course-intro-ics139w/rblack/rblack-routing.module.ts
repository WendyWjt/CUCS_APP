import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RblackPage } from './rblack.page';

const routes: Routes = [
  {
    path: '',
    component: RblackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RblackPageRoutingModule {}
