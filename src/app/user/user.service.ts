import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  static readonly URI = 'http://localhost:3000/users/';
  userlist: User[]    = [];

  constructor( private $http: HttpClient ) {
    this.updateUserList ();
  }

  addUser( user: User ): Observable<User> {
    return this.$http.post<User> ( UserService.URI, user )
               .pipe (
                 tap ( n => this.updateUserList () )
               );
  }

  deleteUser( user: User ): boolean {
    const ind = this.userlist.indexOf ( user );
    if ( ind !== - 1 ) {
      this.userlist.splice ( ind, 1 );
      return true;
    }
    return false;
  }

  editUser( target: User, firstName: string,
            lastName: string, age?: number ): User {
    const ind = this.userlist.indexOf ( target );
    if ( ind !== - 1 ) {
      const user     = this.userlist[ ind ];
      user.firstName = firstName;
      user.lastName  = lastName;
      user.age       = age;
    }
    return target;
  }

  private updateUserList() {
    this.$http.get<User[]> ( UserService.URI )
        .subscribe (
          receivedUsers => this.userlist = receivedUsers
        );
  }
}
