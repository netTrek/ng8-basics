import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component ( {
  selector   : 'msg-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {
  // werte werden von außen (Eltern) übergeben
  @Input () user: User;
  // werte nach außen (an Eltern) übergeben
  @Output () selectedUsr: EventEmitter<User> = new EventEmitter<User> ();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    this.selectedUsr.emit ( this.user );
  }
}
