import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbozorgzadehPage } from './ebozorgzadeh.page';

const routes: Routes = [
  {
    path: '',
    component: EbozorgzadehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbozorgzadehPageRoutingModule {}
