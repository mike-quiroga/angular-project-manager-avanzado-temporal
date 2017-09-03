import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';

import {SharedComponentsModule} from '../../modules/shared-components/shared-components.module';

import { UsersListService } from './services/users-list.service';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    NewUserComponent,
    UsersListComponent,
  ],
  providers: [
    UsersListService ]
} )
export class UsersModule {


}
