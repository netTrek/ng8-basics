import { Component, OnInit } from '@angular/core';
import { Play } from '../rxjs-sample/Play';

@Component ( {
  selector   : 'gfk-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls  : [ './pipe-sample.component.scss' ]
} )
export class PipeSampleComponent implements OnInit {

  crrDate: Date = new Date ();

  constructor( public play: Play ) {
    console.log ( play );
  }

  ngOnInit() {
  }

}
