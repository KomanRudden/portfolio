import { AngularComponent } from './angular/angular.component';
import { QuarkusComponent } from './quarkus/quarkus.component';
import { KafkaComponent } from './kafka/kafka.component';
import { Routes } from '@angular/router';

export const frameworksRoutes: Routes = [{
  path: '',
  children: [
    {
      path: 'kafka',
      component: KafkaComponent
    },
    {
      path: 'quarkus',
      component: QuarkusComponent
    },
    {
      path: 'angular',
      component: AngularComponent
    }    
  ]
}];
