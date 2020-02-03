import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RwangPage } from './rwang.page';

const routes: Routes = [
  {
    path: '',
    component: RwangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RwangPageRoutingModule {}
