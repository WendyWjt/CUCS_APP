import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZwuPage } from './zwu.page';

const routes: Routes = [
  {
    path: '',
    component: ZwuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZwuPageRoutingModule {}
