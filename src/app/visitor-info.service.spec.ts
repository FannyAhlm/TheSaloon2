import { TestBed } from '@angular/core/testing';

import { VisitorInfoService } from './visitor-info.service';

describe('VisitorInfoService', () => {
  let service: VisitorInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
