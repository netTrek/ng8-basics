import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { nextTick } from 'q';
import { first, take } from 'rxjs/operators';

@Component ( {
  selector   : 'gfk-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : [ './rxjs-sample.component.scss' ]
} )
export class RxjsSampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initWithNew ();
    // this.initSubject ();
    this.initBehaviorSubject();
  }

  private initWithNew() {
    const observable: Observable<number> = new Observable<number> ( subscriber => {
      // subscriber.next ( 1 );
      // subscriber.next ( 2 );
      // subscriber.error( 'ups ... damit habe ich nicht gerechnet');
      // subscriber.next ( 3 );
      // subscriber.next ( 4 );
      // subscriber.complete();
      let counter      = 0;
      const intervalId = window.setInterval ( () => {
        console.log ( 'inner' );
        subscriber.next ( counter ++ );
      }, 1000 );
      // es muss eine Methode zurückgegeben werden die den Prozess terminieren kann.
      return () => {
        window.clearInterval ( intervalId );
      };
    } );

    const subscription = observable
      .pipe (
        take ( 10 )
      )
      .subscribe (
        value => console.log ( 'next value:= ', value ),
        err => console.error ( err ),
        () => console.log ( 'ich habe fertig' )
      );

    interval( 2000 ).pipe( first() ).subscribe( value => subscription.unsubscribe() );
  }

  private initSubject() {
    const subject: Subject<number> = new Subject<number> ();
    subject.subscribe( next => console.log ( '1#next', next ) );
    subject.next( 1 );
    subject.next( 2 );
    subject.subscribe( next => console.log ( '2#next', next ) );
    subject.next( 3 );
  }

  private initBehaviorSubject() {
    const subject: BehaviorSubject<number> = new BehaviorSubject<number> ( 0 );
    subject.subscribe( next => console.log ( '1#next', next ) );
    subject.next( 1 );
    subject.next( 2 );
    subject.subscribe( next => console.log ( '2#next', next ) );
    subject.next( 3 );
  }
}
