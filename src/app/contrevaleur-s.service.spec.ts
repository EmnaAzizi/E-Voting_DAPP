import { TestBed, inject } from '@angular/core/testing';

import { ContrevaleurSService } from './contrevaleur-s.service';

describe('ContrevaleurSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContrevaleurSService]
    });
  });

  it('should be created', inject([ContrevaleurSService], (service: ContrevaleurSService) => {
    expect(service).toBeTruthy();
  }));
});
