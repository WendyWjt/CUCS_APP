import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsudderthPage } from './esudderth.page';

const routes: Routes = [
  {
    path: '',
    component: EsudderthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsudderthPageRoutingModule {}
