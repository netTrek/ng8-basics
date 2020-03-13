import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';
import { delay } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserDetailResolveService implements Resolve<User> {

  constructor( private $user: UserService ) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    const id = + route.paramMap.get ( 'id' );
    return this.$user.getUsrById ( id )
               .pipe ( delay ( 2000 ) );
  }
}
