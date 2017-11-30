import { TestBed, inject } from '@angular/core/testing';

import { HttpContactsService } from './http-contacts.service';

describe('HttpContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpContactsService]
    });
  });

  it('should be created', inject([HttpContactsService], (service: HttpContactsService) => {
    expect(service).toBeTruthy();
  }));
});
