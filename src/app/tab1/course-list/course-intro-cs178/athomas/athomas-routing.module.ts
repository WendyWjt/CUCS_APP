import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthomasPage } from './athomas.page';

const routes: Routes = [
  {
    path: '',
    component: AthomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthomasPageRoutingModule {}
