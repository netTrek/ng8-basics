import { Component } from '@angular/core';
import { AppDummyService } from './app-dummy-service';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'msg2020';

  constructor( public $dummy: AppDummyService ) {
  }
}
