import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {RoomDashboardComponent} from './room-dashboard/room-dashboard.component';
import {RoomRowComponent} from './room-row/room-row.component';
import {RoomRoutingModule} from './room-routing.module';
import {CommonModule} from '@angular/common';
import {RoomSeatComponent} from './room-seat/room-seat.component';


@NgModule({
  declarations: [
    RoomDashboardComponent,
    RoomRowComponent,
    RoomSeatComponent
  ],
  imports: [
    SharedModule,
    RoomRoutingModule,
    CommonModule
  ],
  exports: [
    RoomDashboardComponent,
  ]
})
export class RoomModule {
}
