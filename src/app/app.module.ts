import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {Ng2Webstorage} from 'ngx-webstorage';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common/layout/header/header.component';

import {IssuesListService} from './auth/issues-list/services/issues-list.service';
import {IssuesListComponent} from './auth/issues-list/issues-list.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';

import {NewIssueComponent} from './auth/issues-list/new-issue/new-issue.component';
import {HttpService} from './common/services/http.service';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AuthGuard} from 'app/common/guards/auth.guard';
import {AuthenticationService} from './common/services/authentication.service';

import {PublicGuard} from './common/guards/public.guard';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // IssuesListComponent,
    // HomeComponent,
    NotFoundComponent,
    // NewIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    JasperoAlertsModule,
    Ng2Webstorage,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    IssuesListService,
    HttpService,
    PublicGuard, AuthGuard, // Guards
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
