import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SgmasaguePage } from './sgmasague.page';

const routes: Routes = [
  {
    path: '',
    component: SgmasaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SgmasaguePageRoutingModule {}
