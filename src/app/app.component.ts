import { Component } from '@angular/core';
import { AppErrorService } from './app-error.service';
import { filter, skipWhile } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component ( {
  selector   : 'cis-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'softconcis';

  constructor( public $error: AppErrorService, $router: Router ) {
    this.$error.error$.pipe ( filter ( n => !!n ) )
        .subscribe ( n => console.log ( 'ups ...', n ) );

    $router.events
           .pipe ( filter ( event => event instanceof NavigationEnd ) )
           .subscribe ( n => console.log ( n ) );
  }

  changeName() {
    this.title = 'saban';
  }
}
