import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { UserListItemComponent } from './user-liste/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule( {
  declarations: [UserComponent,
                 UserListeComponent,
                 UserListItemComponent
  ],
  imports     : [
    CommonModule,
    UtilsModule
  ],
  exports     : [
    UserComponent
  ]
})
export class UserModule { }
