import { TestBed } from '@angular/core/testing';

import { AppLoadingInterceptorService } from './app-loading-interceptor.service';

describe('AppLoadingInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLoadingInterceptorService = TestBed.get(AppLoadingInterceptorService);
    expect(service).toBeTruthy();
  });
});
