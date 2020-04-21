import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountBashboardComponent } from './account-bashboard/account-bashboard.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingLineComponent } from './booking-line/booking-line.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../../shared/shared.module";
import {AccountRoutingModule} from "./account-routing.module";
import { ReservationLineComponent } from './reservation-line/reservation-line.component';


@NgModule({
  declarations: [AccountBashboardComponent, BookingListComponent, BookingLineComponent, ReservationLineComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    MatFormFieldModule
  ],
  exports: [AccountBashboardComponent]
})
export class MyaccountModule { }
