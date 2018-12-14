import { TestBed, inject } from '@angular/core/testing';

import { CandidatsService } from './candidats.service';

describe('CandidatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatsService]
    });
  });

  it('should be created', inject([CandidatsService], (service: CandidatsService) => {
    expect(service).toBeTruthy();
  }));
});
