import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhayesPage } from './whayes.page';

const routes: Routes = [
  {
    path: '',
    component: WhayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhayesPageRoutingModule {}
