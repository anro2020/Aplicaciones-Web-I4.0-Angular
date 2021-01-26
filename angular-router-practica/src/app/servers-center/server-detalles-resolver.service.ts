import { Injectable } from '@angular/core';
import {Server} from './server';
import {ServerService} from './server.service';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerDetallesResolverService implements Resolve<Server>{
  constructor(private cs: ServerService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
    Observable<never> {
    const id = route.paramMap.get('id');

    return this.cs.getServer(id).pipe(
      take(1),
      mergeMap(server => {
        if (server) {
          return of(server);
        } else { // id not found
          this.router.navigate(['/server-center']);
          return EMPTY;
        }
      })
    );
  }
}
