import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {RoomShow} from '../models/roomShow';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {
  }

  getRoomsObservable(): Observable<RoomShow[]> {
    return this.http.get <RoomShow[]>(environment.apiSpringUrl + '/rooms');
  }

  getRoom(id: number): Observable<RoomShow> {
    return this.http.get<RoomShow>(environment.apiSpringUrl + '/rooms?room_id=' + id);
  }

  addNewRoom(room: RoomShow): Observable<RoomShow> {
    return this.http.post<RoomShow>(environment.apiSpringUrl + '/rooms', RoomShow, httpOptions);

  }

  updateRoom(room: RoomShow): Observable<RoomShow> {
    return this.http.post<RoomShow>(environment.apiSpringUrl + '/room', RoomShow, httpOptions);

  }

}







