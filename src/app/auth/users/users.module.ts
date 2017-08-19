import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [ NewUserComponent ]
} )
export class UsersModule {


}
