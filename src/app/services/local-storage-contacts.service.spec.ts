import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageContactsService } from './local-storage-contacts.service';

describe('LocalStorageContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageContactsService]
    });
  });

  it('should be created', inject([LocalStorageContactsService], (service: LocalStorageContactsService) => {
    expect(service).toBeTruthy();
  }));
});
