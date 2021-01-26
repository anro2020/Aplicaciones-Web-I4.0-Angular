import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';


@NgModule({
  declarations: [
    UsuarioDetalleComponent,
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
