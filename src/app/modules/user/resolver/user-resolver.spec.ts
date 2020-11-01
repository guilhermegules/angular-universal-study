import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserResolver } from './user-resolver';

describe('UserResolver', () => {
  const userResolver = new UserResolver({} as any);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should create an instance', () => {
    expect(userResolver).toBeTruthy();
  });
});
