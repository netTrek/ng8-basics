import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss']
})
export class ContentBodyComponent implements OnInit {

  wert = '123';

  constructor() { }

  ngOnInit() {
  }

}
