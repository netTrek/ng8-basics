import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component ( {
  selector   : 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : ['./countdown.component.scss']
} )
export class CountdownComponent implements OnInit, OnDestroy {

  percent  = 100;
  duration = 4000;

  // private intervalID: number;
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.subscription = interval ( + this.duration / 20 )
      .pipe (
        take ( 20 )
      )
      .subscribe ( next => this.percent -= 5 );

    /*
    this.intervalID = setInterval ( () => {
      this.percent -= 5;
      if ( this.percent === 0 ) {
        this.killInterval ();
      }
    }, + this.duration / 20 );
    */

  }

  ngOnDestroy(): void {
    // this.killInterval ();
    this.subscription.unsubscribe ();
  }

  /*  private killInterval() {
      if ( this.intervalID ) {
        clearInterval ( this.intervalID );
        this.intervalID = undefined;
      }
    }*/

}
