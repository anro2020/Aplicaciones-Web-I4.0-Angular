import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioDetalleComponent} from './usuario-detalle/usuario-detalle.component';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';

const usuariosRoutes: Routes = [
  { path: 'usuarios', component: UsuarioListComponent, data: { animation: 'usuarios' } },
  { path: 'usuario/:id', component: UsuarioDetalleComponent, data: { animation: 'usuario' }}
];



@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
