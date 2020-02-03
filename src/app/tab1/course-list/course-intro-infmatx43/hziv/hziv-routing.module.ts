import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HzivPage } from './hziv.page';

const routes: Routes = [
  {
    path: '',
    component: HzivPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HzivPageRoutingModule {}
