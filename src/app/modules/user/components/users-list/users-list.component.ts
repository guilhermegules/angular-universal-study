import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../services/api.service';

import { IUser } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  users$: Observable<IUser[]> = this.activatedRoute.data.pipe(map(data => data.users));

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void { }
}
