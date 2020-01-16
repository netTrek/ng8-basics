import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component ( {
  selector   : 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  percent = 100;
  @Input() duration = 4000;
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscription = interval(+this.duration / 20 ).pipe(
      take ( 20 )
    ).subscribe(
      next => this.percent -= 5
    );
    // this.intervalID = window.setInterval ( () => {
    //   this.percent -= 5;
    //   if ( this.percent === 0 ) {
    //     this.killInterval ();
    //   }
    // }, 200 );
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private dispose() {
    this.killInterval ();
  }

  private killInterval() {
    this.subscription.unsubscribe();
    // if ( this.intervalID ) {
    //   window.clearInterval ( this.intervalID );
    //   this.intervalID = undefined;
    // }
  }
}
