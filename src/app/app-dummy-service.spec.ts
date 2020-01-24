import { AppDummyService } from './app-dummy-service';

describe ( 'AppDummyService', () => {
  it ( 'should create an instance', () => {
    expect ( new AppDummyService () )
      .toBeTruthy ();
  } );
} );
