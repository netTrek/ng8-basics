import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import { User } from './user/user';

@Component ( {
  selector   : 'gfk-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title = 'gfk2020-test';
  users: User[];

  constructor( private $user: UserService ) {
  }

  chgTitle() {
    this.title = 'gfk';
  }

  updateUser() {
    this.$user.getUsers ()
        .subscribe ( users => this.users = users );
  }
}
