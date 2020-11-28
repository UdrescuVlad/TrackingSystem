import { TestBed } from '@angular/core/testing';

import { SpecificCustomerService } from './specific.customer.service';

describe('SpecificCustomerService', () => {
  let service: SpecificCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
