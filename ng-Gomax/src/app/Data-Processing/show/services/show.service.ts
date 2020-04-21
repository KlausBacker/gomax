import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Show} from '../models/show';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) {
  }

  getShowsObservable(): Observable<Show[]> {
    return this.http.get <Show[]>(environment.apiSpringUrl + '/shows');
  }

  getShow(id: number): Observable<Show> {
    return this.http.get<Show>(environment.apiSpringUrl + '/shows?show_id=' + id);
  }

  getShowsByFilmObservable(id: number): Observable<Show[]> {
    return this.http.get<Show[]>(environment.apiSpringUrl + '/films/shows/' + id);
  }

  addNewShow(show: Show): Observable<Show> {
    return this.http.post<Show>(environment.apiSpringUrl + '/shows', Show, httpOptions);
  }

  updateShow(show: Show): Observable<Show> {
    return this.http.post<Show>(environment.apiSpringUrl + '/shows', Show, httpOptions);
  }

  deleteShow(id: number): Observable<Show> {
    return this.http.delete<Show>(environment.apiSpringUrl + '/shows?shows=' + id);
  }

}







