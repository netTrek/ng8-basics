import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../user';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserEditResolveService implements Resolve<User> {

  constructor( private $user: UserService ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<User> | Promise<User> | User {
    return this.$user.getUserById( + route.paramMap.get( 'id' ) );
  }
}
