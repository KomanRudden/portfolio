import { KafkaComponent } from './kafka/kafka.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { frameworksRoutes } from './frameworks-routing';
import { AngularComponent } from './angular/angular.component';
import { SpringComponent } from './spring/spring.component';
import { QuarkusComponent } from './quarkus/quarkus.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(frameworksRoutes),
    HighlightModule,
    HighlightPlusModule
  ],
  declarations: [
    KafkaComponent,
    AngularComponent,
    SpringComponent,
    QuarkusComponent
  ]
})
export class FrameworksModule { }
