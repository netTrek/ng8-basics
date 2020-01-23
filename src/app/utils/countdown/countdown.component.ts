import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : ['./countdown.component.scss']
} )
export class CountdownComponent implements OnInit {

  percent  = 100;
  duration = 4000;
  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = setInterval ( () => {
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
}