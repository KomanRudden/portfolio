import { cloudRoutes } from './cloud-routing';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightModule } from 'ngx-highlightjs';
import { RouterModule } from '@angular/router';
import { DockerComponent } from './docker/docker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KubernetesComponent } from './kubernetes/kubernetes.component';
import { AzureComponent } from './azure/azure.component';
import { AwsComponent } from './aws/aws.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(cloudRoutes),
    HighlightModule,
    HighlightPlusModule
  ],
  declarations: [
    DockerComponent,
    KubernetesComponent,
    AzureComponent,
    AwsComponent
  ]
})
export class CloudModule { }
