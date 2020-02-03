import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiraniPage } from './sirani.page';

const routes: Routes = [
  {
    path: '',
    component: SiraniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiraniPageRoutingModule {}
