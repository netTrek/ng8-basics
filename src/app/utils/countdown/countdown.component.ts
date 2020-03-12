import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'cis-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : ['./countdown.component.scss']
} )
export class CountdownComponent implements OnInit, OnDestroy {
  percent  = 100;
  duration = 4000;
  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = window.setInterval ( () => {
      this.percent -= 5;
      if ( this.percent === 0 ) {
        this.killInterval ();
      }
    }, + this.duration / 20 );
  }

  private killInterval() {
    if ( this.intervalID ) {
      clearInterval ( this.intervalID );
      this.intervalID = undefined;
    }
  }

  ngOnDestroy(): void {
    this.killInterval ();
  }

}
