import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {ShowRoutingModule} from './show-routing.module';

import {ShowListComponent} from './show-list/show-list.component';
import {ShowDashboardComponent} from './show-dashboard/show-dashboard.component';
import {ShowCardComponent} from './show-card/show-card.component';
import {BookingModule} from '../booking/booking.module';


@NgModule({
  declarations: [
    ShowCardComponent,
    ShowListComponent,
    ShowDashboardComponent,
  ],
  imports: [
    SharedModule,
    ShowRoutingModule,
    BookingModule,

  ],
  exports: [
    ShowDashboardComponent,
  ]
})
export class ShowModule {
}
