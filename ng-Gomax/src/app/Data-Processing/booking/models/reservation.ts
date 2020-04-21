import {Show} from "../../show/models/show";
import {SeatReserved} from "../../rooplan/models/seatReserved";

export class Reservation {
  constructor(
    public price?: number,
    public show?: Show,
    public seatReserved?: SeatReserved
  ) {
  }
}
