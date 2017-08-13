import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../modules/shared-components/shared-components.module';
import {ProjectsRoutingModule } from './projects-routing.module';

import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
import { CommonModule } from '@angular/common';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { NewProjectComponent } from './project-list/new-project/new-project.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectListService} from './project-list/services/project-list.service';


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ProjectsRoutingModule,
    JasperoAlertsModule
  ],
  declarations: [
    ProjectsHomeComponent,
    ProjectDetailComponent,
    NewProjectComponent,
    ProjectListComponent
  ],
  exports : [
    ProjectListComponent
  ],
  providers: [
    ProjectListService
  ]
} )
export class ProjectsModule {}
