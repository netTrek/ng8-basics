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

  deleteUser( user: User ): Observable<void> {
    return this.$http
               .delete<void> ( UserService.URI + user.id )
               .pipe (
                 tap ( n => this.updateUserList () )
               );
  }

  editUser( user: User ): Observable<User> {
    return this.$http
               .put<User> ( UserService.URI + user.id
                 , user )
               .pipe (
                 tap ( n => this.updateUserList () )
               );
  }

  private updateUserList() {
    this.$http.get<User[]> ( UserService.URI )
        .subscribe (
          receivedUsers => this.userlist = receivedUsers
        );
  }
}
