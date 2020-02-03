import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LbicPage } from './lbic.page';

const routes: Routes = [
  {
    path: '',
    component: LbicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LbicPageRoutingModule {}
