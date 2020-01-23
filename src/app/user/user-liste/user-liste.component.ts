import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls  : ['./user-liste.component.scss']
} )
export class UserListeComponent implements OnInit {

  usernames: string[] = ['peter',
                         'paula'
  ];
  selectedUsername: string;

  constructor() {
  }

  ngOnInit() {
  }

  setSelectedUsername( username: string ) {
    this.selectedUsername = username;
  }
}
