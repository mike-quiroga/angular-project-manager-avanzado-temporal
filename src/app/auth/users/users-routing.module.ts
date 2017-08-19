import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  component: NewUserComponent
} ];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: []
} )
export class UsersRoutingModule {}
