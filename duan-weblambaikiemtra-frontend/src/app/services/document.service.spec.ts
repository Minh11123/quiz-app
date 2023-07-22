import { TestBed } from '@angular/core/testing';

import { documentService } from './document.service';

describe('documentService', () => {
  let service: documentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(documentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
