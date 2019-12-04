import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList$: BehaviorSubject<User[]> = new BehaviorSubject( [
    { firstname: 'saban', lastname: 'ünlü', age: 44 },
    { firstname: 'peter', age: 33, lastname: 'müller' },
    { firstname: 'heike', lastname: 'mayer' }
  ]);

  constructor() {
  }

  deleteUsr( user: User ): boolean {
    const ind = this.userList$.value.indexOf ( user );
    if ( ind === - 1 ) {
      return false;
    }
    this.userList$.value.splice ( ind, 1 );
    this.userList$.next( this.userList$.value );
    return true;
  }

  addUser( user: User ): User {
    this.userList$.next( [...this.userList$.value, user] );
    return user;
  }

  updateUser( usr: User, firstname: string, lastname: string ): User | undefined {
    usr.firstname = firstname;
    usr.lastname  = lastname;
    this.userList$.next( this.userList$.value );
    return usr;
  }
}
