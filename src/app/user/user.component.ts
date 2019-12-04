import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'gfk-user',
  templateUrl: './user.component.html',
  // template: `<!--<ul><li>1</li><li>2</li><li>3</li></ul>-->`,
  styleUrls  : [ './user.component.scss' ],
  // styles: [`button {
  //   background-color: red;
  // }`],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
} )
export class UserComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor( public $user: UserService ) {
    // console.log ( $app );
    this.sub = $user.userList$.subscribe( next => {
      console.log ( 'liste wurde aktualisiert', next, next.length );
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
