import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import { AuthGuard } from '../../common/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, pathMatch: 'full',
    data : { name: 'RutaHome' }
  },
  {
    path: 'proyectos', loadChildren : './../projects/projects.module#ProjectsModule',
    data : { name: 'Proyectos' }, canActivate: [ AuthGuard ]
  },
  {
    path: 'issues', loadChildren : './../issues/issues.module#IssuesModule',
    data : { name: 'Issues' }, canActivate: [ AuthGuard ]
  },
  /*
  {
    path: 'usuarios', loadChildren : './../users/users.module#UsersModule',
    data : { name: 'Usuarios' }, canActivate: [ AuthGuard ]
  },*/
  {
    path: 'usuarios', loadChildren : './../users/users.module#UsersModule',
    data : { name: 'Usuarios' }, canActivate: [ AuthGuard ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
