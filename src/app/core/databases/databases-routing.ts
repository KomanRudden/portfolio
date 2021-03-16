import { MysqlComponent } from './mysql/mysql.component';
import { MongoComponent } from './mongo/mongo.component';
import { PostgresComponent } from './postgres/postgres.component';
import { Routes } from '@angular/router';

export const databasesRoutes: Routes = [{
  path: '',
  children: [
        {
            path: 'postgres',
            component: PostgresComponent
        },
        {
            path: 'mongo',
            component: MongoComponent
        },
        {
            path: 'mysql',
            component: MysqlComponent
        }
    ]
}];
