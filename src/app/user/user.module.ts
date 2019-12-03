import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';

@NgModule ( {
  declarations: [ UserComponent,
                  UserListComponent,
                  UserListItemComponent
  ],
  exports     : [
    UserComponent,
    UserListComponent
  ],
  imports     : [
    CommonModule
  ]
} )
export class UserModule {
}
