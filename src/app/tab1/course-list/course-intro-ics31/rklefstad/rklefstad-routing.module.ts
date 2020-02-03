import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RklefstadPage } from './rklefstad.page';

const routes: Routes = [
  {
    path: '',
    component: RklefstadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RklefstadPageRoutingModule {}
