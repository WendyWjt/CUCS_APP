import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpattisPage } from './rpattis.page';

const routes: Routes = [
  {
    path: '',
    component: RpattisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpattisPageRoutingModule {}
