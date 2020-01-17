import { TestBed } from '@angular/core/testing';

import { UserEditResolveService } from './user-edit-resolve.service';

describe('UserEditResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserEditResolveService = TestBed.get(UserEditResolveService);
    expect(service).toBeTruthy();
  });
});
