import { TestBed } from '@angular/core/testing';

import { ConsultationFormService } from './consultation-form.service';

describe('ConsultationFormService', () => {
  let service: ConsultationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
