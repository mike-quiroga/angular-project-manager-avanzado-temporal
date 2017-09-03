import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {SharedComponentsModule} from '../../modules/shared-components/shared-components.module';
import {ReportsRoutingModule} from './reports-routing.module';


import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';

import { IssuesListService } from '../issues/services/issues-list.service';

import { ChartModule } from 'primeng/components/chart/chart';



@NgModule( {
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    SharedComponentsModule,
    ReportsRoutingModule,
    ChartModule
  ],
  declarations: [
    ReportsComponent
  ],
  exports : [
  ],
  providers: [
    IssuesListService
  ]
} )
export class ReportsModule {}
