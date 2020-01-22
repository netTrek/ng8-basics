import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListeComponent } from './user-liste/user-liste.component';



@NgModule({
  declarations: [UserComponent, UserListeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
