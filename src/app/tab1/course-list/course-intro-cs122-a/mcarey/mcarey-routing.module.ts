import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McareyPage } from './mcarey.page';

const routes: Routes = [
  {
    path: '',
    component: McareyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McareyPageRoutingModule {}
