import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';

@NgModule({
  declarations: [ResourcesListComponent],
  imports: [CommonModule, ResourcesRoutingModule, MatCardModule, MatProgressSpinnerModule],
})
export class ResourcesModule { }
