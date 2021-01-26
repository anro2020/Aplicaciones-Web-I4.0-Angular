import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';



@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  usuario$: Observable<Usuario>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuarioService
  ) { }

  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('id')
    this.usuario$ = this.service.getUsuario(id);
    /*this.usuario$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
        this.service.getUsuario(params.get('id'))))*/
  }
  gotoUsuarios(usuario: Usuario){

    const usuarioId = usuario ? usuario.id: null
    this.router.navigate(['/usuarios', { id: usuarioId, foo: 'foo'}])
  }

}
