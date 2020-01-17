import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable ( {
  providedIn: 'root'
} )
export class ErrorHandlingService extends Subject<any> {

  errorMsg$: BehaviorSubject<string|undefined> = new BehaviorSubject<string|undefined>( undefined );

  constructor() {
    super ();
  }

  error( err: HttpErrorResponse ) {
    // console.error( 'ups ', err );
    this.errorMsg$.next( 'error while ' + err.url );
    timer( 2500 ).subscribe(
      next => this.errorMsg$.next ( undefined )
    );
  }
}
