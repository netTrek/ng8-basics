import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  userList: User[] = [];

  constructor( private $http: HttpClient ) {
    this.init ();
  }

  delLast(): boolean {
    return this.del (
      this.userList[ this.userList.length - 1 ]
    );
  }

  add( user: User ): Observable<User> {
    return this.$http.post<User> (
      environment.api, user
    )
               .pipe (
                 tap ( next => this.updateUserList () )
               );
  }

  del( user: User ): boolean {
    const ind = this.userList.indexOf ( user );
    if ( ind !== - 1 ) {
      this.userList.splice ( ind, 1 );
      return true;
    }
    return false;
  }

  update( user: User, newValues: {
    firstname?: string,
    lastname?: string,
    age?: number
  } ): User {
    const ind = this.userList.indexOf ( user );
    if ( ind !== - 1 ) {
      const updatedUsr     = { ...user, ...newValues };
      this.userList[ ind ] = updatedUsr;
      return updatedUsr;
    }
    throw new Error ( 'no user found to update' );
  }

  updateUserList() {
    this.$http.get<User[]> ( environment.api )
        .subscribe (
          next => this.userList = next
        )
    ;
  }

  private init() {
    this.updateUserList ();
  }
}
