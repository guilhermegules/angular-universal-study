import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UserResolver } from './resolver/user-resolver';

import { UserRoutingModule } from './user-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, UserRoutingModule, MatListModule],
  providers: [UserResolver],
})
export class UserModule { }
