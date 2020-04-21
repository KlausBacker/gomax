import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShowDashboardAdminComponent} from './show-dashboard-admin/show-dashboard-admin.component';


const routes: Routes = [
  {path: '', component: ShowDashboardAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowAdminRoutingModule {
}
