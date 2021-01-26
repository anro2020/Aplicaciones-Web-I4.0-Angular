import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ServersCenterComponent} from './servers-center/servers-center.component';
import {ServersListComponent} from './servers-list/servers-list.component';
import {ServersCenterHomeComponent} from './servers-center-home/servers-center-home.component';
import {ServerDetalleComponent} from './server-detalle/server-detalle.component';

import { ServerCenterRoutingModule } from './server-center.routing.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ServerCenterRoutingModule
  ],
  declarations: [
    ServersCenterComponent,
    ServersListComponent,
    ServersCenterHomeComponent,
    ServerDetalleComponent
  ]
})
export class ServerCenterModule { }
