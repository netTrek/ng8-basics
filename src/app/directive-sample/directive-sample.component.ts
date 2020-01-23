import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls  : ['./directive-sample.component.scss']
} )
export class DirectiveSampleComponent implements OnInit {

  show      = true;
  classList = 'underline';

  constructor() {
  }

  ngOnInit() {
  }

  showToggle() {
    this.show = !this.show;
  }
}
