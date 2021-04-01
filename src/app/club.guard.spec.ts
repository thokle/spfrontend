import { TestBed } from '@angular/core/testing';

import { ClubGuard } from './club.guard';

describe('ClubGuard', () => {
  let guard: ClubGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClubGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
