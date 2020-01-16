import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './user-model';
import { map } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService extends BehaviorSubject<UserModel> {

  constructor() {
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

}
