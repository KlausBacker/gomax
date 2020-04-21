import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {SeatShow} from '../../../../Data-Processing/rooplan/models/seatShow';
import {SharedService} from "../../../../Data-Processing/shared.service";
import {SeatReserved} from "../../../../Data-Processing/rooplan/models/seatReserved";

@Component({
  selector: 'gmx-room-seat',
  templateUrl: './room-seat.component.html',
  styleUrls: ['./room-seat.component.scss']
})
export class RoomSeatComponent implements OnInit, AfterContentChecked {

  @Input()
  seat: SeatShow;

  seatClass: string;
  clickCounter: number;
  seatAvailable: number;

  constructor( private sharedService: SharedService ) {
    this.clickCounter = 1;
  }

  ngOnInit() {
    this.defineStyleClass()
  }

  ngAfterContentChecked() {
    this.seatAvailable = this.sharedService.numberSeatLeftToChose;
  }

  defineStyleClass() {
    this.seatClass = this.seat.type;
  }

  /* Method call on a click of a button that change css style class and add or remove object seat into the reservation*/

  selectedSeat() {

    const seatSelected = new SeatShow(this.seat.id);
    const seatReserved = new SeatReserved();

    seatReserved.ref = this.seat.ref;
    seatReserved.status = true;
    seatReserved.seatShow = seatSelected;


    if (this.seatAvailable >= 1 || this.clickCounter >= 2) {

      this.clickCounter++;

      if (this.clickCounter % 2 === 0) {
        this.seatClass = "active";
        this.sharedService.addSeatReservedToReservation(seatReserved);
      } else {
        this.seatClass = this.seat.type;
        this.sharedService.removeSeatReservedToReservation();
      }

    }
  }
}
