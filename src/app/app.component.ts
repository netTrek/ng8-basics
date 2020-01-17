import { Component, Inject } from '@angular/core';
import { UserService } from './user/user.service';
import { MY_APP_NAME } from './app-token';
import { LoadingService } from './loading/loading.service';
import { ErrorHandlingService } from './error-handling/error-handling.service';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2020';
  constructor( user: UserService,
               @Inject( MY_APP_NAME ) appName: string[],
               public $loading: LoadingService,
               public $err: ErrorHandlingService ) {
    console.warn ( appName );
    // user.subscribe( next => console.log ( next.value ));
  }
}








