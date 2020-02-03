import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdillencourtPage } from './mdillencourt.page';

const routes: Routes = [
  {
    path: '',
    component: MdillencourtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdillencourtPageRoutingModule {}
