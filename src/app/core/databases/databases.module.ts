import { databasesRoutes } from './databases-routing';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightModule } from 'ngx-highlightjs';
import { RouterModule } from '@angular/router';
import { PostgresComponent } from './postgres/postgres.component';
import { MysqlComponent } from './mysql/mysql.component';
import { MongoComponent } from './mongo/mongo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(databasesRoutes),
    HighlightModule,
    HighlightPlusModule
  ],
  declarations: [
    MongoComponent,
    MysqlComponent,
    PostgresComponent
  ],
})
export class DatabasesModule { }
