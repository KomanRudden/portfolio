import { generalRoutes } from './general-routing';
import { LinuxComponent } from './linux/linux.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(generalRoutes),
    HighlightModule,
    HighlightPlusModule
  ],
  declarations: [
    LinuxComponent
  ],
})
export class GeneralModule { }
