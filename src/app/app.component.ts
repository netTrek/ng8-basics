import { Component } from '@angular/core';
import { AppErrorService } from './app-error.service';
import { filter, skipWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'cis-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'softconcis';

  constructor( public $error: AppErrorService ) {
    this.$error.error$.pipe ( filter ( n => !!n ) )
        .subscribe ( n => console.log ( 'ups ...', n ) );
  }

  changeName() {
    this.title = 'saban';
  }
}
