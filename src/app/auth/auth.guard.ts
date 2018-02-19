import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../main.reducer';
import { take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromApp.State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromApp.getIsAuth)
      .pipe(take(1));
  }

  canLoad(route: Route) {
    return this.store.select(fromApp.getIsAuth)
      .pipe(take(1));
  }
}
