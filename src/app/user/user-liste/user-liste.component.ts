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
    this.selectedUser = this.userlist[ 0 ];
  }

  setSelectedUser( user: User ) {
    if ( user === this.selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  addNewUserWith( firstName: string, lastName: string ) {
    this.selectedUser = { firstName, lastName };
    this.userlist.push ( this.selectedUser );
  }

  deleteSelected() {
    this.userlist.splice (
      this.userlist.indexOf ( this.selectedUser ),
      1
    );
    // schau dir das an wenn es regnet in polyfill.ts
    // this.userlist.delete( this.selectedUser );
    this.selectedUser = undefined;
  }

  updateSelectedUser( firstName: string, lastName: string ) {
    const userInList     = this.userlist[
      this.userlist.indexOf ( this.selectedUser )
      ];
    userInList.firstName = firstName;
    userInList.lastName  = lastName;
    this.selectedUser    = userInList;
  }
}
