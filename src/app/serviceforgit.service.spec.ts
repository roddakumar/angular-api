import { TestBed } from '@angular/core/testing';

import { ServiceforgitService } from './serviceforgit.service';

describe('ServiceforgitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceforgitService = TestBed.get(ServiceforgitService);
    expect(service).toBeTruthy();
  });
});
