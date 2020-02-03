import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassMaterialPage } from './class-material.page';

const routes: Routes = [
  {
    path: '',
    component: ClassMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassMaterialPageRoutingModule {}
