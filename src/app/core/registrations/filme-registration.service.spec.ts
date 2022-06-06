import { TestBed } from '@angular/core/testing';

import { FilmeRegistrationService } from './filme-registration.service';

describe('FilmeRegistrationService', () => {
  let service: FilmeRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
