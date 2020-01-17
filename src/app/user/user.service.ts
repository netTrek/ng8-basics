import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './user-model';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { executeBrowserBuilder } from '@angular-devkit/build-angular';
import { environment } from '../../environments/environment';
import { ErrorHandlingService } from '../error-handling/error-handling.service';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  // nur zum spielen hat nichts mit dem UserService direkt zu tun!
  value$: BehaviorSubject<number> = new BehaviorSubject<number>( 123 );

  constructor( private $http: HttpClient, private $err: ErrorHandlingService ) {
  }

  getUsers(): Observable<User[]> {
    return this.$http.get<User[]>( environment.api + 'sdfdsf' );
  }
}
/*

export class UserService extends BehaviorSubject<UserModel> {

  constructor( private $http: HttpClient ) {
    super ( { value: 123 } );
  }

  getStreamByKey<T>( key: string ): Observable<T> {
    return this.pipe<T> ( map ( val => val[ key ] ) );
  }

  getValueOfKey<T>( key: string ): T {
    return this.getValue ()[ key ];
  }

  update( key: string, newVal: any ) {
    this.next ( { ...this.value, [ key ]: newVal } );
  }

  getUsers(): Observable<User[]> {
    return this.$http.get<User[]>( environment.api );
  }

}
*/
