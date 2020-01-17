import { Component, OnInit } from '@angular/core';
import { Play } from '../rxjs-sample/Play';
import { UserService } from '../user/user.service';

@Component ( {
  selector   : 'gfk-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls  : [ './pipe-sample.component.scss' ]
} )
export class PipeSampleComponent implements OnInit {

  crrDate: Date = new Date ();
  // value$ = this.user.getStreamByKey<number>( 'value' );

  constructor( public play: Play, public user: UserService ) {
    console.log ( play, user );
  }

  ngOnInit() {
  }

}
