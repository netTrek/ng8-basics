import { Component, OnDestroy, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { delay, first, skipWhile, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'gfk-error',
  templateUrl: './error.component.html',
  styleUrls  : [ './error.component.scss' ]
} )
export class ErrorComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor( public $err: ErrorService ) {
  }

  ngOnInit() {
    this.sub = this.$err.error$.pipe (
      skipWhile ( value => !value ),
      delay ( 3000 )
      // first ()
        )
        .subscribe ( next => this.$err.error$.next ( undefined )
  )
    ;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
