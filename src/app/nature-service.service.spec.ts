import { TestBed } from '@angular/core/testing';

import { NatureServiceService } from './nature-service.service';

describe('NatureServiceService', () => {
  let service: NatureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
