import { Component } from '@angular/core';
import { AppErrorService } from './app-error.service';

@Component ( {
  selector   : 'cis-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'softconcis';

  constructor( public $error: AppErrorService ) {
  }

  changeName() {
    this.title = 'saban';
  }
}
