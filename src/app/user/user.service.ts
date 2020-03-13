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

  delLast(): Promise<void> {
    return this.del ( this.userList[ this.userList.length - 1 ] );
  }

  getUsrById( id: number ): Observable<User> {
    return this.$http.get<User> ( environment.api + id );
  }

  add( user: User ): Observable<User> {
    return this.$http.post<User> (
      environment.api, user
    )
               .pipe (
                 tap ( next => this.updateUserList () )
               );
  }

  del( user: User ): Promise<void> {

    return this.$http.delete<void> ( environment.api + user.id )
               .pipe ( tap ( n => this.updateUserList () ) )
               .toPromise ();
  }

  update( user: User, newValues: {
    firstname?: string,
    lastname?: string,
    age?: number
  } ): Observable<User> {
    const updatedUsr = { ...user, ...newValues };
    return this.$http
               .put<User> ( environment.api + updatedUsr.id, updatedUsr )
               .pipe ( tap ( n => this.updateUserList () ) );
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
