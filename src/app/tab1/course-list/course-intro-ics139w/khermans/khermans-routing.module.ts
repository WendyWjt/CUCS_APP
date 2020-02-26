import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhermansPage } from './khermans.page';

const routes: Routes = [
  {
    path: '',
    component: KhermansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhermansPageRoutingModule {}
