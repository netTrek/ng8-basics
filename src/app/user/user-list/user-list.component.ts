import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [
    {fistname: 'peter', lastname: 'müller' },
    {fistname: 'petra', lastname: 'mayer' }
  ];

  selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  selectedUsr( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
}
