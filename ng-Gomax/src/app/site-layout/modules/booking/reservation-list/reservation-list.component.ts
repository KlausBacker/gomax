import {Component, OnInit} from '@angular/core';

import {ReservationService} from "../../../../Data-Processing/booking/services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {Price} from "../../../../Data-Processing/booking/models/price";
import {JsonResponse} from "../../../../Data-Processing/booking/models/jsonresponse";
import {Filmjson} from "../../../../Data-Processing/booking/models/filmjson";
import {Row} from "../../../../Data-Processing/rooplan/models/row";

@Component({
  selector: 'gmx-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  showingId: number;

  replyJson: JsonResponse;

  infoFilm: Filmjson;

  prices: Price[];

  rows : Row[];


  constructor(private reservationservice: ReservationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showingId = this.route.snapshot.params.showId;

    this.getReservationInfos(this.showingId);

  }

  getReservationInfos(showing_id: number) {
    this.reservationservice.getReservationService(showing_id).subscribe(
      p => {this.replyJson = p;
        console.log(p);
                  // @ts-ignore
                  const priceJson: Price[] = p.cinema.price;
                  this.prices = priceJson;
                  console.log(priceJson);

                  // @ts-ignore
                  const infoMovie: Filmjson = p.film;
                  this.infoFilm = infoMovie;
                  console.log(infoMovie);

                  // @ts-ignore
                  const rowsRoom: Rows[] = p.roomShow.rowShows;
                  this.rows = rowsRoom;
                  console.log(rowsRoom)}
      )
  }

}
