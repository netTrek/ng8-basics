import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  userlist: User[] = [
    { firstName: 'saban', lastName: 'ünlü' },
    { firstName: 'heike', lastName: 'müller' }
  ];

  constructor() {
  }

  addUser( user: User ): User {
    this.userlist.push ( user );
    return user;
  }

  deleteUser( user: User ): boolean {
    const ind = this.userlist.indexOf ( user );
    if ( ind !== - 1 ) {
      this.userlist.splice ( ind, 1 );
      return true;
    }
    return false;
  }

  editUser( target: User, firstName: string,
            lastName: string, age?: number ): User {
    const ind = this.userlist.indexOf ( target );
    if ( ind !== - 1 ) {
      const user     = this.userlist[ ind ];
      user.firstName = firstName;
      user.lastName  = lastName;
      user.age       = age;
    }
    return target;
  }
}
