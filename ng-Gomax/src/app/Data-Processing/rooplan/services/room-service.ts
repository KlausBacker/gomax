import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RoomService {

  constructor(private http: HttpClient) {
  }

  getRoom(RoomShow: number): Observable<any> {
    return this.http.get<any>(environment.apiSpringUrl + '/roomPlan/' + RoomShow);
  }

}
