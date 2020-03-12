import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'cis-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit, OnChanges {
  @Input ()
  user: User;

  @Output ()
  selectUser: EventEmitter<User> =
    new EventEmitter<User> ();

  constructor() {
  }

  ngOnInit(): void {
  }

  select() {
    this.selectUser.emit ( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    this.checkForNewUserVal ( changes );
  }

  private checkForNewUserVal( changes: SimpleChanges ) {
    if ( changes.hasOwnProperty ( 'user' ) ) {
      const userPayload: SimpleChange = changes.user;
      if ( userPayload.firstChange ) {
        console.log ( 'first', userPayload.currentValue );
      }
    }
  }
}
