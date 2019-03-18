import { TestBed } from '@angular/core/testing';

import { PalindromsService } from './palindroms.service';

describe('PalindromsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalindromsService = TestBed.get(PalindromsService);
    expect(service).toBeTruthy();
  });
});
