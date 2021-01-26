import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Server} from '../server';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-server-detalle',
  templateUrl: './server-detalle.component.html',
  styleUrls: ['./server-detalle.component.css']
})

export class ServerDetalleComponent implements OnInit {
  server: Server;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(){
    this.route.data
      .subscribe((data: { server: Server}) => {
        this.editName = data.server.name;
        this.server = data.server;
      })
  }
  cancel() {
    this.gotoServers();
  }

  save() {
    this.server.name = this.editName;
    this.gotoServers();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.server || this.server.name === this.editName){
      return true;
    }
    return this.dialogService.confirm('¿Descartar cambios?');
  }

  gotoServers(){
    const serverId = this.server ? this.server.id : null;
    this.router.navigate(['../', { id: serverId, foo: 'foo' }], { relativeTo: this.route });
  }

}
