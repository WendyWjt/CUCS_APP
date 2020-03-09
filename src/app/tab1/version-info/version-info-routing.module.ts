import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersionInfoPage } from './version-info.page';

const routes: Routes = [
  {
    path: '',
    component: VersionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionInfoPageRoutingModule {}
