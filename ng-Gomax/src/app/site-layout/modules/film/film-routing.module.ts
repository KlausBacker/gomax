import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FilmDashboardComponent} from './film-dashboard/film-dashboard.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';


const routes: Routes = [
  {path: '', component: FilmDashboardComponent},
  {path: 'details/:titrefilm/:filmId', component: FilmDetailComponent},
  {path: 'seances/:titrefilm/:filmId', loadChildren: '../show/show.module#ShowModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FilmRoutingModule {
}
