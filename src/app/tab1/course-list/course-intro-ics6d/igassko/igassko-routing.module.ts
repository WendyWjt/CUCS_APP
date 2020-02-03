import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IgasskoPage } from './igassko.page';

const routes: Routes = [
  {
    path: '',
    component: IgasskoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgasskoPageRoutingModule {}
