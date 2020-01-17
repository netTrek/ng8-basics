import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, range, Subject, Subscription, timer } from 'rxjs';
import { map, take, tap, timeout } from 'rxjs/operators';
import { Play } from './Play';
import { UserService } from '../user/user.service';
import { MY_APP_NAME } from '../app-token';

@Component ( {
  selector   : 'gfk-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : [ './rxjs-sample.component.scss' ],
  providers: [Play]
} )
export class RxjsSampleComponent implements OnInit {
  output = '';
  // value$ = this.user.getStreamByKey<number>( 'value' );

  constructor( public play: Play, public user: UserService, @Inject( MY_APP_NAME ) appName: string[] ) {
    console.warn ( appName );
    console.log ( play );
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initRangeSample ();
    // this.initIntervalSample ();
    // this.initTimerSample ();
    // this.initFromEventSample ();
    // this.initSubASample();
    // this.initBehaviorSubjectSample();
    this.initNewObsSample ();
  }

  private initNewObsSample() {
    const observable: Observable<number> = new Observable<number> ( subscriber => {
      let count = 0;
      const id = window.setInterval( () => {
        subscriber.next( count ++ );
        if ( count === 5 ) {
          subscriber.complete();
          window.clearInterval( id );
        }
      }, 500 );
      return () => window.clearInterval( id );
    } ).pipe(
      tap(
        next => {
          this.user.value$.next( this.user.value$.getValue() + 1 );
          // const val = this.user.getValueOfKey<number>( 'value' );
          // this.user.update( 'value', val + 1 );
        }
      ),
      take ( 2 )
    );
    this.subscribe ( observable, '#s1 ' );
  }

  private initBehaviorSubjectSample() {
    const behaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number> ( 0 );
    this.subscribe ( behaviorSubject, '#sub 1 ' );
    behaviorSubject.next ( 1 );
    this.subscribe ( behaviorSubject, '#sub 2 ' );
    this.subscribe ( behaviorSubject, '#sub 3 ' );
    behaviorSubject.next ( 2 );
    behaviorSubject.next ( 3 );
    behaviorSubject.next ( 4 );
    behaviorSubject.next ( 5 );
    behaviorSubject.error ( 'ups ....' );
  }

  private initSubASample() {
    const subject: Subject<number> = new Subject<number> ();
    subject.next ( 0 );
    this.subscribe ( subject, '#sub 1 ' );
    subject.next ( 1 );
    this.subscribe ( subject, '#sub 2 ' );
    subject.next ( 2 );
    this.subscribe ( subject, '#sub 3 ' );
    subject.next ( 3 );
    subject.next ( 4 );
    subject.next ( 5 );
    subject.error ( 'ups ....' );
  }

  private initFromEventSample() {
    const observable: Observable<number> = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        map ( value => value.clientY )
      );
    this.subscribe ( observable, '#clientY ' );
  }

  private initTimerSample() {
    const observable: Observable<number> = timer ( 500 );
    this.subscribe ( observable, '#timer ' );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 500 )
      .pipe (
        map ( crr => crr * 10 ),
        take ( 3 )
      );
    this.subscribe ( observable, '#interval ' );
  }

  private initRangeSample() {
    const observable: Observable<number> = range ( 2, 3 );
    this.subscribe ( observable, '#range ' );
  }

  private initOfSample() {
    const observable: Observable<number> = of<number> ( 1, 2, 3 );
    this.subscribe ( observable, '#1 ' );
    this.subscribe ( observable, '#2 ' );
  }

  private subscribe( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      next => this.write ( next, prefix ),
      error => this.write ( error, prefix ),
      () => this.write ( 'ich habe fertig', prefix )
    );
  }

  resetOutput() {
    this.output = '';
  }

  private write( msg: any, prefix: string = '' ) {
    // this.output = msg.toString () + '<br>' + this.output;
    this.output += prefix + msg.toString () + '<br>';
  }
}
