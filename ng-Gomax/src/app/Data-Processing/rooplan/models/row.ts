import {SeatShow} from './seatShow';

export class Row {
  constructor(
    public row_id: number,
    public seatShows: SeatShow[]
  ) {
  }
}
