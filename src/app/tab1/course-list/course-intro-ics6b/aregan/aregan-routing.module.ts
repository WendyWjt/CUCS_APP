import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreganPage } from './aregan.page';

const routes: Routes = [
  {
    path: '',
    component: AreganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreganPageRoutingModule {}
