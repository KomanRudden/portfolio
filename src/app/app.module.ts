import { StaticService } from './service/static.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItems } from './widgets/menu/menu-items';
import { WidgetsModule } from './widgets/widgets.module';
import { HomeComponent } from './widgets/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import * as hljs from 'highlight.js';
(document.defaultView as any).hljs = hljs;

export function getHighlightLanguages() {
  return {
    xml: () => import('highlight.js/lib/languages/xml'), 
    typescript: () => import('highlight.js/lib/languages/typescript'),
    scss: () => import('highlight.js/lib/languages/scss'),
    java: () => import('highlight.js/lib/languages/java'),
    plaintext: () => import('highlight.js/lib/languages/plaintext'),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WidgetsModule,
    HighlightModule,
    HighlightPlusModule
  ],
  exports: [
    HighlightModule,
    HighlightPlusModule
  ],
  providers: [
    MenuItems,
    StaticService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
     }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }