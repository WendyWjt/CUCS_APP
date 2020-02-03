import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsagoPage } from './ssago.page';

const routes: Routes = [
  {
    path: '',
    component: SsagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsagoPageRoutingModule {}
