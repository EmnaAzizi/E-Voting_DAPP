import { TestBed, inject } from '@angular/core/testing';

import { SmartcontractService } from './smartcontract.service';

describe('SmartcontractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartcontractService]
    });
  });

  it('should be created', inject([SmartcontractService], (service: SmartcontractService) => {
    expect(service).toBeTruthy();
  }));
});
