import { Component, Inject } from '@angular/core';
import { UserService } from './user/user.service';
import { MY_APP_NAME } from './app-token';
import { LoadingService } from './loading/loading.service';
import { ErrorHandlingService } from './error-handling/error-handling.service';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2020';
  showModal = false;
  constructor( user: UserService,
               @Inject( MY_APP_NAME ) appName: string[],
               @Inject( HTTP_INTERCEPTORS ) interceptors: HttpInterceptor[],
               public $loading: LoadingService,
               public $err: ErrorHandlingService,
               private $router: Router
               ) {

    console.warn ( interceptors );
    $router.events
           .pipe(
             filter( event => event instanceof ActivationEnd),
             map ( event => (event as ActivationEnd).snapshot.outlet === 'modal' ),
             distinctUntilChanged(),
             tap ( n => console.log ( n ) )
           )
           .subscribe( next => this.showModal = next );
  }

  closeModal() {
    this.$router.navigate( [ { outlets: { modal:  null  } } ] );
  }
}








