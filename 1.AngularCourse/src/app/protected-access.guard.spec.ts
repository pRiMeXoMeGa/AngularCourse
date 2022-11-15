import { TestBed } from '@angular/core/testing';

import { ProtectedAccessGuard } from './protected-access.guard';

describe('ProtectedAccessGuard', () => {
  let guard: ProtectedAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectedAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
