import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthorntonPage } from './athornton.page';

const routes: Routes = [
  {
    path: '',
    component: AthorntonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthorntonPageRoutingModule {}
