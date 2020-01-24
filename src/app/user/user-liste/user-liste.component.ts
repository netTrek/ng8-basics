import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppDummyService } from '../../app-dummy-service';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'msg-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls  : ['./user-liste.component.scss'],
  providers  : [AppDummyService]
} )
export class UserListeComponent implements OnInit {
  selectedUser: User;

  constructor( public $dummy: AppDummyService,
               public $user: UserService ) {
  }

  ngOnInit() {
    this.selectedUser = this.$user.userlist[ 0 ];
  }

  setSelectedUser( user: User ) {
    if ( user === this.selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }
  addNewUserWith( firstName: string, lastName: string ) {
    this.selectedUser =
      this.$user.addUser ( { firstName, lastName } );
  }

  deleteSelected() {
    if ( this.$user.deleteUser ( this.selectedUser ) ) {
      this.selectedUser = undefined;
    }
  }

  updateSelectedUser( firstName: string, lastName: string ) {
    this.selectedUser = this.$user.editUser (
      this.selectedUser, firstName, lastName
    );
  }

  increment() {
    this.$dummy.val ++;
  }
}
