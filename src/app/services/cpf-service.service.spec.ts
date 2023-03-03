import { TestBed } from '@angular/core/testing';

import { CpfServiceService } from './cpf-service.service';

describe('CpfServiceService', () => {
  let service: CpfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
