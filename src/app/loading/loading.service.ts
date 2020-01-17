import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // count$ = new BehaviorSubject<number>(0);
  count = 0;
  constructor() { }

  increment() {
    // this.count$.next( this.count$.value + 1);
    timer( 0 ).subscribe(
      next => this.count ++
    );
  }

  decrement() {
    timer( 250 ).subscribe(
      next => this.count--
      // next => this.count$.next( this.count$.value - 1) );
    );
    }
    // this.count --;
}
