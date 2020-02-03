import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IharrisPage } from './iharris.page';

const routes: Routes = [
  {
    path: '',
    component: IharrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IharrisPageRoutingModule {}
