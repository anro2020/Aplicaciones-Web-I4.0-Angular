import { Injectable } from '@angular/core';
import { MessageService } from '../message.service'
import {Observable, of} from 'rxjs';
import {Usuario} from './usuario';
import {map} from 'rxjs/operators';
import {USUARIOS} from './mock-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private messageService: MessageService) { }

  getUsuarios(): Observable<Usuario[]>{
    this.messageService.add('UsuarioService: fetched usuarios')
    return of(USUARIOS)
  }

  getUsuario(id: number | string){
    return this.getUsuarios().pipe(
      map((usuarios: Usuario[]) => usuarios.find(usuario => usuario.id === +id))
    )
  }
}
