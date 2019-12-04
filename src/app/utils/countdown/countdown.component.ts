import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component ( {
  selector   : 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent                                      = 100;
  counter$: Observable<number>;
  @Input () duration                           = 100;
  @Output () finished: EventEmitter<undefined> = new EventEmitter ();
  private subscription: Subscription;

  // private intervalId: number;

  constructor() {
  }

  ngOnInit() {
    // 2000
    // 1000 .... 20
    this.duration     = + this.duration;
    this.subscription = interval ( this.duration / 20 )
      .pipe (
        map ( value => 100 - (value + 1) * 5 ),
        take ( 20 )
      )
      .subscribe (
        next => this.percent = next, // (this.percent -= 5),
        err => console.error ( err ),
        () => this.finished.emit ()
      );

    this.counter$ = interval ( this.duration / 20 )
      .pipe (
        map ( value => 100 - (value + 1) * 5 ),
        take ( 20 )
      );

    // this.intervalId = window.setInterval ( () => {
    //   this.percent -= 5;
    //   console.log ( this.percent );
    //   if ( this.percent === 0 ) {
    //     this.dispose ();
    //   }
    // }, 100 );
  }

  ngOnDestroy(): void {
    this.dispose ();
  }

  private dispose() {

    this.subscription.unsubscribe ();
    // if ( !!this.intervalId ) {
    //   window.clearInterval ( this.intervalId );
    //   this.intervalId = undefined;
    // }
  }

}
