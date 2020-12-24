import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightModule } from 'ngx-highlightjs';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java/java.component';
import { developmentRoutes } from './development-routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(developmentRoutes),
    HighlightModule,
    HighlightPlusModule
  ],
  declarations: [
    JavaComponent
  ]
})
export class DevelopmentModule { }
