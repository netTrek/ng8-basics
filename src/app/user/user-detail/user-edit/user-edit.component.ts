import { Component, OnInit } from '@angular/core';
import { UserDetailComponent } from '../user-detail.component';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component ( {
  selector   : 'cis-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls  : ['./user-edit.component.scss']
} )
export class UserEditComponent implements OnInit {

  constructor( public userDetail: UserDetailComponent,
               private $user: UserService ) {
  }

  ngOnInit(): void {
  }

  update( user: User ) {
    this.$user.update ( this.userDetail.user, user )
        .subscribe (
          u => this.userDetail.user = u
        );
  }
}
