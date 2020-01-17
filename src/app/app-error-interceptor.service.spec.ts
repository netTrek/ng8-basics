import { TestBed } from '@angular/core/testing';

import { AppErrorInterceptorService } from './app-error-interceptor.service';

describe('AppErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppErrorInterceptorService = TestBed.get(AppErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
