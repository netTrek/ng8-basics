import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  percent = 100;
  private intervalId: number;

  constructor() { }

  ngOnInit() {
    this.intervalId = window.setInterval( () => {
      this.percent -= 5;
      console.log ( this.percent );
      if ( this.percent === 0) {
        window.clearInterval( this.intervalId );
      }
    }, 100);
  }

}
