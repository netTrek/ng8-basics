import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList$: BehaviorSubject<User[]> = new BehaviorSubject( []);

  constructor( private $http: HttpClient ) {
    this.updateList();
  }

  deleteUsr( user: User ): boolean {
    // deletee
    const ind = this.userList$.value.indexOf ( user );
    if ( ind === - 1 ) {
      return false;
    }
    this.userList$.value.splice ( ind, 1 );
    this.userList$.next( this.userList$.value );
    return true;
  }

  addUser( user: User ): User {
    // post
    this.userList$.next( [...this.userList$.value, user] );
    return user;
  }

  updateUser( usr: User, firstname: string, lastname: string ): User | undefined {
    // put
    usr.firstname = firstname;
    usr.lastname  = lastname;
    this.userList$.next( this.userList$.value );
    return usr;
  }

  private updateList() {
    this.$http.get<User[]>( environment.api )
        .subscribe( users => this.userList$.next( users ) );
  }
}
