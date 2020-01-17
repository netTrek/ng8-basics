import { TestBed, async, inject } from '@angular/core/testing';

import { UserActivateGuard } from './user-activate.guard';

describe('UserActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserActivateGuard]
    });
  });

  it('should ...', inject([UserActivateGuard], (guard: UserActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
