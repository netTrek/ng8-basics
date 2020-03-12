import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component ( {
  selector   : 'cis-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  userList: User[] = [
    {
      firstname: 'saban',
      lastname : 'ünlü'
    },
    {
      firstname: 'peter',
      lastname : 'müller'
    }
  ];
  selectedUser: User;
  obs: Observable<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectUsr( user: User ) {
    this.selectedUser = user;
  }

  delLast() {
    this.userList.pop ();
  }
}
