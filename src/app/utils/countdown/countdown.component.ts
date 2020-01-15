import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  percent = 100;
  private intervalID: number;

  constructor() { }

  ngOnInit() {
    this.intervalID = window.setInterval ( () => {
      this.percent -= 5;
      if ( this.percent === 0 ) {
        window.clearInterval( this.intervalID );
        this.intervalID = undefined;
      }
    }, 200 );
  }

}
