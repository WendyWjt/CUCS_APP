import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DgkayPage } from './dgkay.page';

const routes: Routes = [
  {
    path: '',
    component: DgkayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DgkayPageRoutingModule {}
