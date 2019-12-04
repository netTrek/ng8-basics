import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

// Eltern
@Component ( {
  selector   : 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  selectedUsr: User;

  constructor( public $user: UserService ) {
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
    if ( this.selectedUsr ) {
      this.$user.deleteUsr ( this.selectedUsr );
      this.selectedUsr = undefined;
    }
  }

  // addUser( firstname: string, lastname: string ) {
  //   const usr        = { firstname, lastname };
  //   this.$user.addUser ( usr ).then(
  //     user => this.selectedUsr = user
  //   );
  //   // this.selectedUsr = this.$user.addUser ( usr );
  // }

  async addUser( firstname: string, lastname: string ) {
    // const usr        = { firstname, lastname };
    // const newUSer = await this.$user.addUser ( usr );
    // this.selectedUsr = newUSer;
    this.selectedUsr = await this.$user.addUser ( { firstname, lastname } );
  }

  async updateUser( firstname: string, lastname: string ) {
    this.selectedUsr = await this.$user.updateUser (
      {
        ...this.selectedUsr,
        firstname, lastname
      }
    );
  }

}
