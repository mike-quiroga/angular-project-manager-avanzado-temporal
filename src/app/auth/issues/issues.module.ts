import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesButtonCloseComponent } from './issues-actions/issues-button-close/issues-button-close.component';
import { IssuesButtonReasignComponent } from './issues-actions/issues-button-reasign/issues-button-reasign.component';
import { IssuesButtonWatchComponent } from './issues-actions/issues-button-watch/issues-button-watch.component';

import { IssuesListComponent } from './issues-list.component';
import { NewIssueComponent } from './new-issue/new-issue.component';

import { SharedComponentsModule } from '../../modules/shared-components/shared-components.module';
import { IssuesListService } from './services/issues-list.service';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IssuesRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    IssuesButtonWatchComponent,
    IssuesButtonCloseComponent,
    IssuesButtonReasignComponent,
    IssuesListComponent,
    NewIssueComponent
  ],
  exports: [ IssuesListComponent ],
  providers: [ IssuesListService ]
} )
export class IssuesModule {}
