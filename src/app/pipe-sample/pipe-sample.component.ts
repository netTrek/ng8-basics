import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls  : ['./pipe-sample.component.scss']
} )
export class PipeSampleComponent implements OnInit {
  sampleStr  = 'Saban Ünlü';
  sampleNum  = Math.PI;
  sampleDate = new Date ();

  constructor() {
  }

  ngOnInit() {
  }

}
