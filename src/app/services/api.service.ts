import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResourceResponse } from '../interfaces/resource.interface';
import { IUsersResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiMainUri = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<IUsersResponse> {
    const path = `${this.apiMainUri}/users`;

    return this.http.get<IUsersResponse>(path);
  }

  fetchResources(): Observable<IResourceResponse> {
    const path = `${this.apiMainUri}/unknown`;

    return this.http.get<IResourceResponse>(path);
  }
}
