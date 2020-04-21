import { Injectable } from '@angular/core';
import {Booking} from "./booking/models/booking";
import {Reservation} from "./booking/models/reservation";
import {ReservationService} from "./booking/services/reservation.service";
import {SeatReserved} from "./rooplan/models/seatReserved";

@Injectable()
export class SharedService {

  arrayValuesForTotal: number[];
  totalPriceDashboard: number;

  booking: Booking;

  reservations: Reservation[];

  numberSeatAvailable: number;
  numberSeatChoose: number;
  numberSeatLeftToChose: number;

  constructor(private reservationservice: ReservationService) {

    this.totalPriceDashboard = 0;

    this.reservations = [];

    this.arrayValuesForTotal = [0];

    this.numberSeatAvailable = 0;

    this.numberSeatChoose = 0;

    this.numberSeatLeftToChose = 0;

  }

  /*
   *
   * Service for adding and removing a reservation to a global booking
   * */

  addOneReservation(_reservation: Reservation) {

    this.reservations.push(_reservation);

    this.numberSeatAvailable ++;
    this.numberSeatLeftToChose = this.numberSeatAvailable + this.numberSeatChoose;

  }


  removeOneReservation(_reservation: Reservation) {

    this.reservations.splice(this.reservations.findIndex(v => v.price === _reservation.price), 1);

    this.numberSeatAvailable --;
    this.numberSeatChoose --;
    this.numberSeatLeftToChose = this.numberSeatAvailable + this.numberSeatChoose;

  }

  /*
  *
  * Service for sending a booking to data base using http client request post
  * */

  sendBooking() {

    const dateToday = new Date();

    this.booking = new Booking(dateToday, this.reservations);

    console.log(this.booking);

    this.reservationservice.sendBooking(this.booking).subscribe(
      p => console.log(p)
    );
  }

  /*
  *
  * Service for add and remove the total to pay for the booking and showing the variable in dashboard template
  * */

  addToTotalPrice(valueToAdd: number) {
    this.arrayValuesForTotal.push(valueToAdd);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.totalPriceDashboard = this.arrayValuesForTotal.reduce(reducer);
  }

  removeToTotalPrice(valueToRemove: number) {

    const index = this.arrayValuesForTotal.indexOf(valueToRemove);
    if (index > -1) {
      this.arrayValuesForTotal.splice(index, 1);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.totalPriceDashboard = this.arrayValuesForTotal.reduce(reducer);

    this.removeSeatReservedToReservation()
  }

  /* Add a seat to a random reservation*/

  addSeatReservedToReservation(seatSelected: SeatReserved) {

    this.numberSeatChoose --;
    this.numberSeatLeftToChose = this.numberSeatAvailable + this.numberSeatChoose

    for (let i = 0; i < this.reservations.length; i++) {

      if (this.reservations[i].seatReserved === undefined) {

        this.reservations[i].seatReserved = seatSelected;

        console.log(this.reservations)

        return;
      }
    }
  }

  /* Remove a seat to a random reservation*/

  removeSeatReservedToReservation() {

    this.numberSeatChoose ++;
    this.numberSeatLeftToChose = this.numberSeatAvailable + this.numberSeatChoose;

    for (let i = 0; i < this.reservations.length; i++) {

      if (this.reservations[i].seatReserved !== undefined) {
        this.reservations[i].seatReserved = undefined;
        console.log(this.reservations);
        return;
      }
    }
  }

}
