import { TestBed } from '@angular/core/testing';

import { BitService } from './bit.service';

describe('BitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitService = TestBed.get(BitService);
    expect(service).toBeTruthy();
  });
});
