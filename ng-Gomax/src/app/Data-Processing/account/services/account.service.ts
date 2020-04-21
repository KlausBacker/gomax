import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../../booking/models/booking";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) { }

  getAllBookingService(): Observable<Booking[]> {
    return this.http.get<Booking[]>(environment.apiSpringUrl + '/booking');
  }

}
