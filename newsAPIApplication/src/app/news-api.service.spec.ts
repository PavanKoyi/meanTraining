import { TestBed } from '@angular/core/testing';

import { NewsAPIService } from './news-api.service';

describe('NewsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsAPIService = TestBed.get(NewsAPIService);
    expect(service).toBeTruthy();
  });
});
