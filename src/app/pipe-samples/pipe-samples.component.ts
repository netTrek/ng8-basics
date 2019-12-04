import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfk-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls  : [ './pipe-samples.component.scss' ]
} )
export class PipeSamplesComponent implements OnInit {

  str      = 'Saban Ünlü';
  num      = Math.PI;
  longNum  = Math.PI * 10 ** 10;
  currDate = new Date ();
  list     = [ 1,
               2,
               3,
               4
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
