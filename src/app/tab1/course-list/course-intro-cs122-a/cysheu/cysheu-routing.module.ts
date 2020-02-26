import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CysheuPage } from './cysheu.page';

const routes: Routes = [
  {
    path: '',
    component: CysheuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CysheuPageRoutingModule {}
