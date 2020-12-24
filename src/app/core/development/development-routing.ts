import { JavaComponent } from './java/java.component';
import { Routes } from '@angular/router';

export const developmentRoutes: Routes = [{
  path: '',
  children: [{
      path: 'java',
      component: JavaComponent
  }]
}];
