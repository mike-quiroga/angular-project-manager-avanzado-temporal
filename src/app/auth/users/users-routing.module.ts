import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const routes:Routes = [
  {
    path: 'nuevo',
    component: NewUserComponent
  },
  {
    path: '',
    component: UsersListComponent
  }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: []
} )
export class UsersRoutingModule {
}
