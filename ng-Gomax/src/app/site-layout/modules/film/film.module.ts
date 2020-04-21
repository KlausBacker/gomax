import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {FilmRoutingModule} from './film-routing.module';
import {FilmListComponent} from './film-list/film-list.component';
import {FilmCardComponent} from './film-card/film-card.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {FilmDashboardComponent} from './film-dashboard/film-dashboard.component';

import {ShowModule} from '../show/show.module';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    FilmDashboardComponent,
    FilmListComponent,
    FilmCardComponent,
    FilmDetailComponent]
  ,
  imports: [
    SharedModule,
    FilmRoutingModule,
    ShowModule,
    MatDialogModule,
  ],
  exports: [FilmDashboardComponent]
})
export class FilmModule {
}
