import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  userList: User[] = [
    { firstname: 'saban', lastname: 'ünlü', age: 44 },
    { firstname: 'peter', age: 33, lastname: 'müller' },
    { firstname: 'heike', lastname: 'mayer' }
  ];

  constructor() {
  }

  deleteUsr( user: User ): boolean {
    const ind = this.userList.indexOf ( user );
    if ( ind === - 1 ) {
      return false;
    }
    this.userList.splice ( ind, 1 );
    return true;
  }

  addUser( user: User ): User {
    this.userList.push ( user );
    return user;
  }

  updateUser( usr: User, firstname: string, lastname: string ): User | undefined {
    usr.firstname = firstname;
    usr.lastname  = lastname;
    return usr;
  }
}
