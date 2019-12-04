import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ErrorService } from '../utils/error/error.service';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList: User[]                   = [];
  userList$: BehaviorSubject<User[]> = new BehaviorSubject ( [] );

  constructor( private $http: HttpClient,
               private $err: ErrorService ) {
    this.updateList ();
  }

  deleteUsr( userPayload: User ): Promise<any> {
    // delete
    return this.$http.delete( environment.api + userPayload.id ).pipe(
      tap( success => this.updateList(),
        err => this.$err.error$.next(
          'konnte Datensatz nicht löschen'
        ))
    ).toPromise();
  }

  addUser( userPayload: User ): Promise<User> {
    // post
    /*this.userList$.next ( [ ...this.userList$.value,
                            user
    ] );*/
    return this.$http.post<User> ( environment.api, userPayload )
               .pipe (
                  tap( newuser => this.updateList(),
                    err => this.$err.error$.next(
                      'konnte Datensatz nicht anlege'
                    ))
               )
               .toPromise ();
  }

  updateUser( userPayload: User ): Promise<User> {
    // put
    return this.$http.put<User>( environment.api + userPayload.id, userPayload ).pipe(
      tap( newuser => this.updateList(),
        err => this.$err.error$.next(
          'konnte Datensatz nicht aktualisieren'
        ))
    ).toPromise();
  }

  private updateList() {
    this.$http.get<User[]> ( environment.api )
        .subscribe (
          users => this.userList$.next ( users ), // Behsub
          // users => this.userList = users // liste,
          err => this.$err.error$.next ( 'konnte benutzerliste nicht aktualisieren' )
        )
    ;
  }
}
