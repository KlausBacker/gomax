import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {SharedService} from "../../../../Data-Processing/shared.service";

@Component({
  selector: 'gmx-reservation-dashboard',
  templateUrl: './booking-dashboard.component.html',
  providers: [SharedService],
  styleUrls: ['./booking-dashboard.component.scss']
})
export class BookingDashboardComponent implements OnInit, AfterContentChecked {

  TotalReservationPrice: number;

  constructor(private sharedService: SharedService) {
    this.TotalReservationPrice = 0;
  }

  ngOnInit() {}

  ngAfterContentChecked() {
    this.TotalReservationPrice = this.sharedService.totalPriceDashboard;
  }


  confirmBooking() {
    if (this.sharedService.reservations.length > 0) {
      console.log(this.sharedService.reservations);
      this.sharedService.sendBooking();
      alert("Votre commande a été prise en compte");
    }
  }

}
