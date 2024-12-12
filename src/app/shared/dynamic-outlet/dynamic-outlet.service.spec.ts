import { TestBed } from '@angular/core/testing';

import { DynamicOutletService } from './dynamic-outlet.service';

describe('DynamicOutletService', () => {
  let service: DynamicOutletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicOutletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
