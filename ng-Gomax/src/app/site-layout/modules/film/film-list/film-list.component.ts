import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FilmCardComponent} from '../film-card/film-card.component';
import {FilmService} from '../../../../Data-Processing/film/services/film.service';
import {Film} from '../../../../Data-Processing/film/models/film';

@Component({
  selector: 'gmx-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Array<Film>;

  @ViewChild(FilmCardComponent, {static: false})
  FilmCardComponent: FilmCardComponent;

  @ViewChildren(FilmCardComponent)
  filmsQuery: QueryList<FilmCardComponent>;

  constructor(private filmService: FilmService) {
  }


  ngOnInit() {
    this.loadFilmsObservable();
  }

  private loadFilmsObservable() {
    this.filmService.getFilms()
      .subscribe(res => this.films = res);
  }
}
