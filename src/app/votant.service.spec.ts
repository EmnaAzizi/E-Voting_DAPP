import { TestBed, inject } from '@angular/core/testing';

import { VotantService } from './votant.service';

describe('VotantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotantService]
    });
  });

  it('should be created', inject([VotantService], (service: VotantService) => {
    expect(service).toBeTruthy();
  }));
});
