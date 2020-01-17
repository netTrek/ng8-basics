import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';

describe ( 'UserService', () => {
  beforeEach ( () => TestBed.configureTestingModule ( {
    imports: [HttpClientTestingModule]
  } ) );

  it ( 'should be created', () => {
    const service: UserService = TestBed.get ( UserService );
    expect ( service )
      .toBeTruthy ();
  } );

  it ( 'should loadUser', () => {
    const service: UserService = TestBed.get ( UserService );
    const httpMock             = TestBed.get ( HttpTestingController );


    const dummy: User[] = [
      {
        id       : 1,
        firstname: 'Mackenzie',
        lastname : 'Hodges',
        age      : 19
      }
    ];
    let loadedUsers: User[];
    service.getUsers().subscribe( users => loadedUsers = users);
    const testReques           = httpMock.expectOne ( 'http://localhost:3000/users' );
    testReques.flush( dummy );

    expect( loadedUsers ).toEqual( dummy );
  } );
} );
