import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'msg-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {
  // werte nach außen (an Eltern) übergeben
  @Output () selectedUsr: EventEmitter<User> = new EventEmitter<User> ();
  // tslint:disable-next-line
  private _user: User;

  // werte werden von außen (Eltern) übergeben

  get user(): User {
    return this._user;
  }

  @Input ()
  set user( value: User ) {
    this._user = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    setTimeout ( () => {
      this.user = { firstName: 'franz', lastName: 'Mayer' };
    }, 3000 );
    this.selectedUsr.emit ( this.user );
  }
}
