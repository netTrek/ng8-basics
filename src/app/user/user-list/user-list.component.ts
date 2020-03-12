import { Component, OnInit } from '@angular/core';
import { User } from '../user';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
