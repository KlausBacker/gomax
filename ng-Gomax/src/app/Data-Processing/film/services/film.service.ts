import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Film} from '../models/film';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }

  /*
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiSpringUrl + '/films');
  }
  */

  /*Get the Set of Films that have shows planned on today and sort it by film id
  In the Bdd, films_id are ordered by release date
  If time, change the map to release date*/
  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiSpringUrl + '/films').pipe(
      map(films => films.sort((a, b) => {
          return a.film_id > b.film_id ? 1 : -1;
        })
      ));
  }

  getFilm(id: number): Observable<Film> {
    // http://localhost:8282/films/details/3
    console.log(environment.apiSpringUrl + '/films?film_id=' + id);
    return this.http.get<Film>(environment.apiSpringUrl + '/films/details/' + id);
  }

}
