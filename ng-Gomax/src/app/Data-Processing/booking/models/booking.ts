import {Reservation} from "./reservation";

export class Booking {
  constructor(
    public dateTo: Date,
    public reservations : Reservation[],
    public id?: number,
    public customer?: string
  ) {
  }
}
