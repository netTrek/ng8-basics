import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls: ['./binding-sample.component.scss']
})
export class BindingSampleComponent implements OnInit {
  wert = 'saban';
  nocheinwert = 'toll oder';
  num = 1;
  file = 'cat1.jpeg';
  constructor() { }

  ngOnInit() {
  }

  getWert( prefix: string = '') {
    // console.log( 'working ....');
    return `getWert := ${prefix}${this.wert}`;
  }

  chgImg() {
    this.file = 'cat2.jpeg';
  }
}
