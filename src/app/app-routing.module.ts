import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './widgets/home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
    },{
      path: 'home',
      component: HomeComponent
    },{
      path: 'cloud',
      loadChildren: () => import('./core/cloud/cloud.module').then(m => m.CloudModule)
    },{      
      path: 'development',
      loadChildren: () => import('./core/development/development.module').then(m => m.DevelopmentModule)
    },{
      path: 'frameworks',
      loadChildren: () => import('./core/frameworks/frameworks.module').then(m => m.FrameworksModule)
    },{
      path: 'general',
      loadChildren: () => import('./core/general/general.module').then(m => m.GeneralModule)
    },{
      path: 'databases',
      loadChildren: () => import('./core/databases/databases.module').then(m => m.DatabasesModule)
    },{      
      path: '**',
      component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
