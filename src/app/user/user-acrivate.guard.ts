import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserAcrivateGuard implements CanActivate/*, CanDeactivate<UserEditComponent> */{

  constructor( private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //
    // return timer( 150 ).pipe(
    //   // tap ( n => console.log ( 'go to home' ) ),
    //   mapTo( true /* this.router.parseUrl('/home') */)
    // );
    return true;
  }
/*
  canDeactivate( component: UserEditComponent,
                 currentRoute: ActivatedRouteSnapshot,
                 currentState: RouterStateSnapshot,
                 nextState?: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.dirty;
  }*/

}
