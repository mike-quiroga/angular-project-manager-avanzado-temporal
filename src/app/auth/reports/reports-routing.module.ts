import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', component: ReportsComponent }
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  declarations: []
} )
export class ReportsRoutingModule {}
