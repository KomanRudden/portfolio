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
      path: 'development',
      loadChildren: () => import('./core/development/development.module').then(m => m.DevelopmentModule)
  },{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
