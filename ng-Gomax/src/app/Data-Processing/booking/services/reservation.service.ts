import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {JsonResponse} from '../models/jsonresponse';
import {Booking} from '../models/booking';


@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  constructor(private http: HttpClient) {
  }

  getReservationService(showing_id: number): Observable<JsonResponse> {
    return this.http.get<JsonResponse>(environment.apiSpringUrl + '/shows/' + showing_id);
  }

  sendBooking(bookingObject: Booking): Observable<Booking> {
    return this.http.post<Booking>(environment.apiSpringUrl + '/booking', bookingObject);
  }

}
