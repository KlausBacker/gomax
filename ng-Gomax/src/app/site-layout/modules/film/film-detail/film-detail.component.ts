import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../../Data-Processing/film/models/film';
import {FilmService} from '../../../../Data-Processing/film/services/film.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'gmx-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  @Input()
  film: Film;
  filmId: number;

  constructor(private filmService: FilmService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filmId = this.route.snapshot.params.filmId;
    console.log(this.filmId);
    this.loadOneFilmObservable();
  }

  private loadOneFilmObservable() {
    this.filmService.getFilm(this.filmId)
      .subscribe(res => {
        console.log(res);
        this.film = res;
      });
  }

}

