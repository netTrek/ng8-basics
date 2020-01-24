import { Injectable } from '@angular/core';

@Injectable ( { providedIn: 'root' } )
export class AppDummyService {
  val = 123;

  constructor() {
    console.log ( 'init dummy service' );
  }
}
