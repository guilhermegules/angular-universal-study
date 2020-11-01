import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchUsers', () => {
    it('should call fetchUsers and bring all users data', () => {
      service.fetchUsers().subscribe();

      const { request } = httpMock.expectOne('https://reqres.in/api/users');

      expect(request.method).toEqual('GET');
    });
  });

  describe('fetchResources', () => {
    it('should call fetchResources and bring all resources data', () => {
      service.fetchResources().subscribe();

      const { request } = httpMock.expectOne('https://reqres.in/api/unknown');

      expect(request.method).toEqual('GET');
    });
  });
});
