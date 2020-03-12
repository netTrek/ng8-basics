import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'cis-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls  : ['./pipe-samples.component.scss']
} )
export class PipeSamplesComponent implements OnInit {

  num  = Math.PI;
  date = new Date ();
  str  = 'hello World';

  constructor() {
  }

  ngOnInit(): void {
  }

}
