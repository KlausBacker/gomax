import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../Data-Processing/account/services/account.service';
import {Booking} from '../../../../Data-Processing/booking/models/booking';

@Component({
  selector: 'gmx-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  bookings: Booking[];

  constructor( private accountService: AccountService ) {
  }

  ngOnInit() {
    this.getAllBooking();
  }

  // http request get array of booking

  getAllBooking() {
    this.accountService.getAllBookingService().subscribe(
      p => {
        this.bookings = p;
      }
    );
  }

}
