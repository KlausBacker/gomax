import {Component, Input, OnInit} from '@angular/core';
import {Reservation} from "../../../../Data-Processing/booking/models/reservation";

@Component({
  selector: 'gmx-reservation-line',
  templateUrl: './reservation-line.component.html',
  styleUrls: ['./reservation-line.component.scss']
})
export class ReservationLineComponent implements OnInit {

  @Input()
  reservation : Reservation;

  constructor() { }

  ngOnInit() {
  }

}
