import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MkostersPage } from './mkosters.page';

const routes: Routes = [
  {
    path: '',
    component: MkostersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MkostersPageRoutingModule {}
