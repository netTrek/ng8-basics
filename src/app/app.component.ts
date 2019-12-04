import { Component } from '@angular/core';
import { AppService } from './app.service';
import { ActivationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'GfK2019';
  msg: string;
  routes: Route[];

  private counter = 0;

  constructor( $app: AppService, public $router: Router ) {
    console.log ( this.$router.config );
    this.routes = this.$router.config
                      .filter ( value =>
                        value.path !== '' &&
                        value.path.indexOf( '/:' ) === -1 &&
                        value.path !== '**'
                      );

    this.$router.events
        .pipe ( filter ( event => event instanceof ActivationEnd ) )
        .subscribe (
          event => console.log ( event )
        );
  }

  machWasSchlimmes() {
    // console.log ( 'hepüpa' );
  }

  ready() {
    this.msg = `${++ this.counter} counter sind fertig`;
  }
}
