import { Component, Inject } from '@angular/core';
import { UserService } from './user/user.service';
import { MY_APP_NAME } from './app-token';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2020';
  constructor( user: UserService, @Inject( MY_APP_NAME ) appName: string[] ) {
    console.warn ( appName );
    user.subscribe( next => console.log ( next.value ));
  }
}








