import { TestBed } from '@angular/core/testing';

import { WoodService } from './wood.service';

describe('WoodService', () => {
  let service: WoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
