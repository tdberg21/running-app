import { TestBed } from '@angular/core/testing';

import { NewRunsService } from './new-runs.service';

describe('NewRunsService', () => {
  let service: NewRunsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRunsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
