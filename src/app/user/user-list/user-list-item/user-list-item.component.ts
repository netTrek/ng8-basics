import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'cis-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {
  private _user: User;

  get user(): User {
    return this._user;
  }

  @Input ()
  set user( value: User ) {
    console.log ( 'new user is := ', value );
    this._user = value;
  }

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
}
