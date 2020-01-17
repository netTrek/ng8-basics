import { TestBed } from '@angular/core/testing';

import { AppAuthInterceptorService } from './app-auth-interceptor.service';

describe('AppAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppAuthInterceptorService = TestBed.get(AppAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
