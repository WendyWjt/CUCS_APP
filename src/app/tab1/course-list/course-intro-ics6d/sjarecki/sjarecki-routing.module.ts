import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SjareckiPage } from './sjarecki.page';

const routes: Routes = [
  {
    path: '',
    component: SjareckiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SjareckiPageRoutingModule {}
