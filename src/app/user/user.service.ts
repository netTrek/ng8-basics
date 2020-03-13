import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  userList: User[] = [
    {
      firstname: 'saban',
      lastname : 'ünlü'
    },
    {
      firstname: 'peter',
      lastname : 'müller'
    }
  ];

  constructor() {
  }

  delLast(): boolean {
    return this.del (
      this.userList[ this.userList.length - 1 ]
    );
  }

  add( user: User ): User {
    this.userList.push ( user );
    return user;
  }

  del( user: User ): boolean {
    const ind = this.userList.indexOf ( user );
    if ( ind !== - 1 ) {
      this.userList.splice ( ind, 1 );
      return true;
    }
    return false;
  }

  update( user: User, newValues: {
    firstname?: string,
    lastname?: string,
    age?: number
  } ): User {
    const ind = this.userList.indexOf ( user );
    if ( ind !== - 1 ) {
      const updatedUsr     = { ...user, ...newValues };
      this.userList[ ind ] = updatedUsr;
      return updatedUsr;
    }
    throw new Error ( 'no user found to update' );
  }

}
