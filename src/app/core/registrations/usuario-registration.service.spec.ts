import { TestBed } from '@angular/core/testing';

import { UsuarioRegistrationService } from './usuario-registration.service';

describe('UsuarioRegistrationService', () => {
  let service: UsuarioRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
