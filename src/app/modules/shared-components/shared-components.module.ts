import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {SortingComponent} from './sorting/sorting.component';
import {GroupingComponent} from './grouping/grouping.component';
import {LoaderComponent} from './loader/loader.component';
import { MomentPipePipe } from './pipes/moment-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SortingComponent,
    GroupingComponent,
    LoaderComponent,
    MomentPipePipe
  ],
  exports: [
    SortingComponent,
    GroupingComponent,
    LoaderComponent,
    MomentPipePipe
  ]
})
export class SharedComponentsModule { }
