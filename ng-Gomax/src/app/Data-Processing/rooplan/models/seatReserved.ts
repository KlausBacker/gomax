import {SeatShow} from "./seatShow";

export class SeatReserved {
  constructor(
    public id?: number,
    public ref?: string,
    public status?: boolean,
    public seatShow?: SeatShow
  ) {
  }
}
