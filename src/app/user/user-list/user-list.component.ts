import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'cis-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
} )
export class UserListComponent implements OnInit {

  selectedUser: User;

  constructor( public $user: UserService ) {
  }

  ngOnInit(): void {
  }

  selectUsr( user: User ) {
    this.selectedUser = user;
  }

  delLast() {
    this.$user.delLast ();
    this.selectedUser = undefined;
  }

  add() {
    this.$user.add (
      {
        firstname: 'frank' + Date.now (),
        lastname : 'meyer'
      }
    )
        .subscribe (
          next => this.selectedUser = next
        );
  }

  update() {
    this.$user.update (
      this.$user.userList[ 0 ],
      { firstname: 'neu' + Date.now () }
    )
        .subscribe (
          next => this.selectedUser = next
        );
  }
}
