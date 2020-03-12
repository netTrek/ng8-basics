import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'cis-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {

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
}
