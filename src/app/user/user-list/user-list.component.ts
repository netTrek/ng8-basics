import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// Eltern
@Component ( {
  selector   : 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    {firstname: 'saban', lastname: 'ünlü', age: 44},
    {firstname: 'peter', age: 33, lastname: 'müller'},
    {firstname: 'heike', lastname: 'mayer'}
  ];

  selectedUsr: User;
  constructor() {
  }
  ngOnInit() {
  }

  selectUser( usr: User ) {
    if ( this.selectedUsr === usr ) {
      this.selectedUsr = undefined;
    } else {
      this.selectedUsr = usr;
    }
  }

  deleteSelectedUsr() {
    this.userList.splice( this.userList.indexOf( this.selectedUsr) , 1 );
    this.selectedUsr = undefined;
  }

  addUser( firstname: string, lastname: string ) {
    this.userList.push( {firstname, lastname } );
    this.selectedUsr = this.userList.slice( -1 )[0];
  }
}
