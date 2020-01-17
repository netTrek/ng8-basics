import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {
  @Input()
  msg: string;
  constructor() { }

  ngOnInit() {
  }

}
