import { TestBed } from '@angular/core/testing';

import { HeroContentService } from './hero-content.service';

describe('HeroContentService', () => {
  let service: HeroContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
