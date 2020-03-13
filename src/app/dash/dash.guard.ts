import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class DashGuard implements CanActivate {

  constructor( private router: Router ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if ( Math.random () < .5 ) {
      return this.router.parseUrl ( '/home' );
    }
    return true;
  }

}
