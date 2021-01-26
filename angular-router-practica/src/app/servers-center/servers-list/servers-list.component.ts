import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Server} from '../server';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent implements OnInit {
  servers$: Observable<Server[]>;
  selectedId: number;

  constructor(
    private service: ServerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getServers();
      })
    )
  }
}
