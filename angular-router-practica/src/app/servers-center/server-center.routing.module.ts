import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ServersCenterComponent} from './servers-center/servers-center.component';
import {ServersListComponent} from './servers-list/servers-list.component';
import {ServersCenterHomeComponent} from './servers-center-home/servers-center-home.component';
import {ServerDetalleComponent} from './server-detalle/server-detalle.component';
import {CanDeactivateGuard} from '../can-deactivate.guard';
import {ServerDetallesResolverService} from './server-detalles-resolver.service';

const serversCenterRoutes: Routes = [
  {
    path: '',
    component: ServersCenterComponent,
    children: [
      {
        path: '',
        component: ServersListComponent,
        children: [
          {
            path: ':id',
            component: ServerDetalleComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              server: ServerDetallesResolverService
            }
          },
          {
            path: '',
            component: ServersCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(serversCenterRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class ServerCenterRoutingModule { }
