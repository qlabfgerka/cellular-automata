import { TestBed } from '@angular/core/testing';

import { SandService } from './sand.service';

describe('SandService', () => {
  let service: SandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
