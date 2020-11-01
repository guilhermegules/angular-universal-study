import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { IUser, IUsersResponse } from '../../../interfaces/user.interface';

@Injectable()
export class UserResolver implements Resolve<IUser[]> {
  constructor(private api: ApiService) { }

  resolve(): Observable<IUser[]> {
    return this.api.fetchUsers().pipe(map((response: IUsersResponse) => response?.data));
  }
}
