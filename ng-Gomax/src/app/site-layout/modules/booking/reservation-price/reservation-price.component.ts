import {Component, Input, OnInit} from '@angular/core';
import {Price} from "../../../../Data-Processing/booking/models/price";
import {JsonResponse} from "../../../../Data-Processing/booking/models/jsonresponse";
import {Filmjson} from "../../../../Data-Processing/booking/models/filmjson";
import {SharedService} from "../../../../Data-Processing/shared.service";
import {Reservation} from "../../../../Data-Processing/booking/models/reservation";
import {Show} from "../../../../Data-Processing/show/models/show";


@Component({
  selector: 'gmx-reservation-tarif',
  templateUrl: './reservation-price.component.html',
  styleUrls: ['./reservation-price.component.scss']
})

export class ReservationPriceComponent implements OnInit {

  @Input()
  price: Price;

  @Input()
  ShowInfos: JsonResponse;

  @Input()
  film : Filmjson;

  totalPrice: number;
  reservationQuantity: number;

  reservation: Reservation;
  idShow: Show;

  constructor( private sharedService: SharedService ) {
    this.reservationQuantity = 0;
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.idShow = new Show(this.ShowInfos.id);
  }

  addReservation() {  /*add one reservation from shared.service and add one to the template quantity*/

    const addOnePlace: number = this.reservationQuantity;

    if ( addOnePlace < 10) {

      const QuantityChoose = addOnePlace + 1;
      this.reservationQuantity = QuantityChoose;

      const priceOnePlace = this.price.amount;
      const totalPriceOneReser: number = this.price.amount * QuantityChoose;
      this.totalPrice = totalPriceOneReser;

      this.sharedService.addToTotalPrice(priceOnePlace); // add price of one reservation to the shared service array of price

      const reservationAdd: Reservation = new Reservation(
        priceOnePlace, this.idShow
      );

      this.sharedService.addOneReservation(reservationAdd); // add object Reservation to shared service Reservation[]
    }
  }

  removeReservation() {   /*remove one reservation from shared.service and take off one to the template quantity*/

    const addOnePlace: number = this.reservationQuantity;

    if (addOnePlace > 0) {

      const QuantityChoose = addOnePlace - 1;
      this.reservationQuantity = QuantityChoose;
      const priceOnePlace = this.price.amount;

      const totalPriceOneRese: number = this.price.amount * QuantityChoose;
      this.totalPrice = totalPriceOneRese;
      this.sharedService.removeToTotalPrice(priceOnePlace);

      const reservationRemove: Reservation = new Reservation();
      reservationRemove.price = priceOnePlace;
      reservationRemove.show = this.idShow;


      this.sharedService.removeOneReservation(reservationRemove);
    }
  }

}
