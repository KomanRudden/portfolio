import { AzureComponent } from './azure/azure.component';
import { AwsComponent } from './aws/aws.component';
import { KubernetesComponent } from './kubernetes/kubernetes.component';
import { DockerComponent } from './docker/docker.component';
import { Routes } from '@angular/router';

export const cloudRoutes: Routes = [{
  path: '',
  children: [
        {
            path: 'docker',
            component: DockerComponent
        },
        {
            path: 'kubernetes',
            component: KubernetesComponent
        },
        {
            path: 'aws',
            component: AwsComponent
        },
        {
            path: 'azure',
            component: AzureComponent
        }
    ]
}];
