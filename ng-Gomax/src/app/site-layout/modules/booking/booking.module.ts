import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
import {RoomModule} from '../roomplan/room.module';
import {BookingDashboardComponent} from "./booking-dashboard/booking-dashboard.component";
import {BookingRoutingModule} from "./booking-routing.module";
import {ReservationPriceComponent} from "./reservation-price/reservation-price.component";


@NgModule({
  declarations: [ReservationPriceComponent, BookingDashboardComponent, ReservationListComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule,
    RoomModule,
  ],
  exports: [
    BookingDashboardComponent,
  ]
})
export class BookingModule {
}
