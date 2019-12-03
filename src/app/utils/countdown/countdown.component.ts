import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;
  private intervalId: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalId = window.setInterval ( () => {
      this.percent -= 5;
      console.log ( this.percent );
      if ( this.percent === 0 ) {
        this.dispose ();
      }
    }, 100 );
  }

  ngOnDestroy(): void {
    this.dispose ();
  }

  private dispose() {

    if ( !!this.intervalId ) {
      window.clearInterval ( this.intervalId );
      this.intervalId = undefined;
    }
  }

}
