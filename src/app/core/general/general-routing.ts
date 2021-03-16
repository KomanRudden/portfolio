import { LinuxComponent } from './linux/linux.component';
import { Routes } from '@angular/router';

export const generalRoutes: Routes = [{
  path: '',
  children: [{
      path: 'linux',
      component: LinuxComponent
  }]
}];
