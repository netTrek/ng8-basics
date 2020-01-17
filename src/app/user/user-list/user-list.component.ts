import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [
  ];

  selectedUser: User;

  constructor( private $user: UserService ) { }

  ngOnInit() {
    this.$user.getUsers().subscribe( users => this.users = users );
  }

  selectedUsr( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  delSelected() {
    if ( !! this.selectedUser ) {
      const index = this.users.indexOf( this.selectedUser );
      if ( index !== -1 ) {
        this.users.splice( index, 1 );
        this.selectedUser = undefined;
      }
    }
  }
}
