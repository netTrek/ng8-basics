import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2020';
  constructor( user: UserService ) {
    user.value$.subscribe( next => console.log ( next ));
  }
}








