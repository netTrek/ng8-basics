import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;
  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = window.setInterval ( () => {
      this.percent -= 5;
      if ( this.percent === 0 ) {
        this.killInterval ();
      }
    }, 200 );
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private dispose() {
    this.killInterval ();
  }

  private killInterval() {
    if ( this.intervalID ) {
      window.clearInterval ( this.intervalID );
      this.intervalID = undefined;
    }
  }
}
