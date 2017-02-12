/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountServiceS } from './account.service';

describe('AccountServiceS', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountServiceS]
    });
  });

  it('should ...', inject([AccountServiceS], (service: AccountServiceS) => {
    expect(service).toBeTruthy();
  }));
});
