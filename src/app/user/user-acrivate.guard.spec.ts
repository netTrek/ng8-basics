import { TestBed, async, inject } from '@angular/core/testing';

import { UserAcrivateGuard } from './user-acrivate.guard';

describe('UserAcrivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAcrivateGuard]
    });
  });

  it('should ...', inject([UserAcrivateGuard], (guard: UserAcrivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
