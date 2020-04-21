import {Component, OnInit, ViewChild} from '@angular/core';
import {ShowService} from '../../../../Data-Processing/show/services/show.service';
import {Show} from '../../../../Data-Processing/show/models/show';
import {Film} from '../../../../Data-Processing/film/models/film';
import {FilmService} from '../../../../Data-Processing/film/services/film.service';

import {ActivatedRoute} from '@angular/router';

import {ShowCardComponent} from '../show-card/show-card.component';

@Component({
  selector: 'gmx-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  shows: Array<Show>;
  filmId: number;
  film: Film;

  @ViewChild(ShowCardComponent, {static: false})
  ShowCardComponent: ShowCardComponent;

  constructor(
    private showService: ShowService,
    private filmService: FilmService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filmId = this.route.snapshot.params.filmId;
    this.loadShowsObservable();
    this.loadOneFilmObservable();
  }

  private loadShowsObservable() {
    this.showService.getShowsByFilmObservable(this.filmId)
      .subscribe(res => {
        this.shows = res;
        console.log(res);
      });
  }

  private loadOneFilmObservable() {
    this.filmService.getFilm(this.filmId)
      .subscribe(res => {
        this.film = res;
        console.log(res);
      });
  }


}
