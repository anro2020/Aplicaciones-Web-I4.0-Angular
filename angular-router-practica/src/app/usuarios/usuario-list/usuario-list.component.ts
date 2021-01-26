import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios$: Observable<Usuario[]>
  selectedId: number

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.usuarios$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')
        return this.service.getUsuarios()
      })
    )
  }

}
