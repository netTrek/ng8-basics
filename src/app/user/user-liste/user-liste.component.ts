import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'msg-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls  : ['./user-liste.component.scss']
} )
export class UserListeComponent implements OnInit {

  userlist: User[] = [
    { firstName: 'saban', lastName: 'ünlü' },
    { firstName: 'heike', lastName: 'müller' }
  ];
  selectedUser: User;

  constructor() {
  }

  ngOnInit() {
  }

  setSelectedUser( user: User ) {
    if ( user === this.selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
}
