import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, Subject, timer } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

@Component ( {
  selector   : 'msg-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : ['./rxjs-sample.component.scss']
} )
export class RxjsSampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initIntervalSample ();
    // this.initFromEventSample ();
    // this.initSubject ();
    // this.initBehaviorSubject ();
    this.initSwitchMapSample ();
  }

  private initSwitchMapSample() {
    const observable = timer ( 1000 )
      .pipe (
        switchMap ( v => interval ( 500 ) )
      );
    this.subscribe ( observable );
  }

  private initBehaviorSubject() {
    const observable: BehaviorSubject<number> =
            new BehaviorSubject<number> ( 0 );
    this.subscribe ( observable, '1#' );
    observable.next ( 1 );
    // observable.error( 'ups' );
    observable.next ( 3 );
    this.subscribe ( observable, '2#' );
    // observable.next( 4 );
    // observable.complete();
  }

  private initSubject() {
    const observable: Subject<number> = new Subject<number> ();
    this.subscribe ( observable, '1#' );
    observable.next ( 1 );
    // observable.error( 'ups' );
    observable.next ( 3 );
    this.subscribe ( observable, '2#' );
    // observable.next( 4 );
    // observable.complete();
  }

  private initFromEventSample() {
    const observable: Observable<number> = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        // tap( next => console.log ( next) ), // kontrolle original obs
        map ( m => m.clientY ),
        // tap( next => console.log ( next) ), // wie sieht stream aus nach map
        filter ( y => y < 10 )
        // tap( next => console.log ( next) ), // wie sieht stream aus nach filter
      );
    this.subscribe ( observable );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 250 )
      .pipe (
        take ( 2 )
      );
    const subscription                   = this.subscribe ( observable, '1#' );
    timer ( 250 )
      .subscribe (
        next => this.subscribe ( observable, '2#' )
      );
    // console.log ( subscription );
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 1, 2, 3, 4 );
    this.subscribe ( observable, '1#' );
    this.subscribe ( observable, '2#' ); // cold
  }

  private subscribe( observable: Observable<any>, prefix: string = '' ) {
    return observable.subscribe (
      next => console.log ( prefix + ' next val :=', next ),
      error => console.error ( prefix + ' error val :=', error ),
      () => console.log ( prefix + ' ich habe fertig' )
    );
  }
}
