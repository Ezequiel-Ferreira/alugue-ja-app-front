import { TestBed } from '@angular/core/testing';

import { AluguelRegistrationService } from './aluguel-registration.service';

describe('AluguelRegistrationService', () => {
  let service: AluguelRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluguelRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
