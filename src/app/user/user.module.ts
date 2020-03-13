import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { UserContractsComponent } from './user-detail/user-contracts/user-contracts.component';
import { UserEditComponent } from './user-detail/user-edit/user-edit.component';

@NgModule ( {
  declarations: [UserComponent,
                 UserListComponent,
                 UserListItemComponent,
                 UserDetailComponent,
                 UserContractsComponent,
                 UserEditComponent
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
