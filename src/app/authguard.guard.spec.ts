import { TestBed, async, inject } from '@angular/core/testing';

import { AuthguardGuard } from './authguard.guard';
import { LoginService } from './login.service';

describe('AuthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthguardGuard,
        LoginService
      ]
    });
  });

  it('should ...', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
