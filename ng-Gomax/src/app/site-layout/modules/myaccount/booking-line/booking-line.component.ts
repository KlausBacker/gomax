import {Component, Input, OnInit} from '@angular/core';
import {Booking} from "../../../../Data-Processing/booking/models/booking";
import {Reservation} from "../../../../Data-Processing/booking/models/reservation";

@Component({
  selector: 'gmx-booking-line',
  templateUrl: './booking-line.component.html',
  styleUrls: ['./booking-line.component.scss']
})
export class BookingLineComponent implements OnInit {

  @Input()
  booking: Booking;

  reservations: Reservation[];


  constructor() { }

  ngOnInit() {
    this.reservations = this.booking.reservations
  }

}
