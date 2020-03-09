import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'course-list',
    loadChildren: () => import('./tab1/course-list/course-list.module').then( m => m.CourseListPageModule)
  },  {
    path: 'class-material',
    loadChildren: () => import('./tab1/class-material/class-material.module').then( m => m.ClassMaterialPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./tab1/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'version-info',
    loadChildren: () => import('./tab1/version-info/version-info.module').then( m => m.VersionInfoPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
