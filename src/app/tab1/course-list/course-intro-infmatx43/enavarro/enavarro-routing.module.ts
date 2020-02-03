import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnavarroPage } from './enavarro.page';

const routes: Routes = [
  {
    path: '',
    component: EnavarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnavarroPageRoutingModule {}
