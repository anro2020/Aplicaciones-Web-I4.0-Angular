import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ManageUsuariosComponent } from './manage-usuarios/manage-usuarios.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageServersComponent,
    ManageUsuariosComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
