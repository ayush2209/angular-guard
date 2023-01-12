import { TestBed } from '@angular/core/testing';

import { ChangeRouteGuard } from './change-route.guard';

describe('ChangeRouteGuard', () => {
  let guard: ChangeRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangeRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
