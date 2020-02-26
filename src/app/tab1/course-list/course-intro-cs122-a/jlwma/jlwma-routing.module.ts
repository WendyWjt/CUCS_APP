import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JlwmaPage } from './jlwma.page';

const routes: Routes = [
  {
    path: '',
    component: JlwmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JlwmaPageRoutingModule {}
