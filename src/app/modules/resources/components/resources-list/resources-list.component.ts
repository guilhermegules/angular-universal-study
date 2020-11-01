import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { IResourceResponse, IResource } from '../../../../interfaces/resource.interface';

import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesListComponent implements OnInit {
  resources$: Observable<IResource[]> = this.api.fetchResources().pipe(
    delay(1500),
    map((response: IResourceResponse) => response.data),
  );

  constructor(private api: ApiService) { }

  ngOnInit(): void { }
}
