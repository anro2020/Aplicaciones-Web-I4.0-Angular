import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Server} from './server';
import {SERVERS} from './mock-servers';
import {MessageService} from '../message.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  static nextServerId = 100;
  private servers$: BehaviorSubject<Server[]> = new BehaviorSubject<Server[]>(SERVERS);

  constructor(private messageService: MessageService) { }


  getServers() { return this.servers$; }

  getServer(id: number | string){
    return this.getServers().pipe(
      map(servers => servers.find(server => server.id === +id))
    );
  }

  addServer(name: string){
    name = name.trim();
    if(name) {
      const server = { id: ServerService.nextServerId++, name};
      SERVERS.push(server);
      this.servers$.next(SERVERS);
    }
  }
}
