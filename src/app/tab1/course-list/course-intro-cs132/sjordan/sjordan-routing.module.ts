import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SjordanPage } from './sjordan.page';

const routes: Routes = [
  {
    path: '',
    component: SjordanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SjordanPageRoutingModule {}
