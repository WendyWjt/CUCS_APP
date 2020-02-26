import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MlevoratoPage } from './mlevorato.page';

const routes: Routes = [
  {
    path: '',
    component: MlevoratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MlevoratoPageRoutingModule {}
