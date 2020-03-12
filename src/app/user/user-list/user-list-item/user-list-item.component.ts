import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'cis-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit, OnChanges {

  @Input ()
  @HostBinding ( 'class.selected' )
  isSelected = false;

  @Input ()
  user: User;

  @Output ()
  selectUser: EventEmitter<User> =
    new EventEmitter<User> ();

  constructor() {
  }

  ngOnInit(): void {
  }

  // @HostListener('click', ['$event'])
  @HostListener ( 'click' )
  select() {
    this.selectUser.emit ( this.user );
    this.isSelected = true;
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
