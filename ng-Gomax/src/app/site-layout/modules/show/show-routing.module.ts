import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowDashboardComponent} from './show-dashboard/show-dashboard.component';
import {ShowListComponent} from './show-list/show-list.component';


const routes: Routes = [
  {path: '', component: ShowDashboardComponent},
  {path: '/show/:id', component: ShowListComponent},
  {path: 'reservation/:showId', loadChildren: '../booking/booking.module#BookingModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule {

}
