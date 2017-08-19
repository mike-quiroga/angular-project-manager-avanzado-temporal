import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AppCustomUsernameDirective } from './directives/app-custom-username.directive';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    AppCustomUsernameDirective
  ]
} )
export class LoginModule {}
