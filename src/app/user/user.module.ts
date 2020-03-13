import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule ( {
  declarations: [UserComponent,
                 UserListComponent,
                 UserListItemComponent,
                 UserDetailComponent
  ],
  imports     : [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  exports     : [
    UserComponent
  ]
})
export class UserModule { }
