import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2019';

  constructor( $app: AppService ) {
    console.log ( $app );
  }

  machWasSchlimmes() {
    console.log ( 'hepüpa' );
  }
}
