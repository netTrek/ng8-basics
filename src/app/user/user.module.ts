import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { CountdownComponent } from '../utils/countdown/countdown.component';
import { DangerDirective } from '../utils/danger/danger.directive';
import { ReversePipe } from '../utils/reverse/reverse.pipe';

@NgModule ( {
  declarations: [ UserComponent,
                  UserListComponent,
                  UserListItemComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports     : [ UserComponent ]
} )
export class UserModule {
}