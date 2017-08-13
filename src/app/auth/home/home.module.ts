import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsModule} from '../projects/projects.module';
import { HomeRoutingModule} from './home-routing.module';

import { HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProjectsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
