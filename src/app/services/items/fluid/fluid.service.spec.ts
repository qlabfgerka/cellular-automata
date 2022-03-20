import { TestBed } from '@angular/core/testing';

import { FluidService } from './fluid.service';

describe('FluidService', () => {
  let service: FluidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
