import { TestBed } from '@angular/core/testing';

import { NummerService } from './nummer.service';

describe('NummerService', () => {
  let service: NummerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NummerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
