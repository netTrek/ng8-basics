import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { UserListItemComponent } from './user-liste/user-list-item/user-list-item.component';

@NgModule( {
  declarations: [UserComponent,
                 UserListeComponent,
                 UserListItemComponent
  ],
  imports     : [
    CommonModule
  ],
  exports     : [
    UserComponent
  ]
})
export class UserModule { }
