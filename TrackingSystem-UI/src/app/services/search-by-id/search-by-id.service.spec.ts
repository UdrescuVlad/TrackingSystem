import { TestBed } from '@angular/core/testing';

import { SearchByIdService } from './search-by-id.service';

describe('SearchByIdService', () => {
  let service: SearchByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
