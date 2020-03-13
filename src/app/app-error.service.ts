import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class AppErrorService {

  error$: BehaviorSubject<string | undefined> =
    new BehaviorSubject<string | undefined> ( undefined );

  constructor() {
  }

  sendError( errorMessage: string ) {
    this.error$.next ( errorMessage );
    timer ( 2000 )
      .subscribe ( n => this.reset () );
  }

  reset() {
    this.error$.next ( undefined );
  }
}
