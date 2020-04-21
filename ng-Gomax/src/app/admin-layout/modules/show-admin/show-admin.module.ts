import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';


import {ShowAdminRoutingModule} from './show-admin-routing.module';

import {ShowListAdminComponent} from './show-list-admin/show-list-admin.component';
import {ShowDashboardAdminComponent} from './show-dashboard-admin/show-dashboard-admin.component';
import {ShowCrudDialogBoxComponent} from './show-crud-dialog-box/show-crud-dialog-box.component';
import {MatDatepickerModule, MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [
    ShowListAdminComponent,
    ShowDashboardAdminComponent,
    ShowCrudDialogBoxComponent,
    ShowCrudDialogBoxComponent,
  ],
  imports: [
    CommonModule,
    ShowAdminRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatDatepickerModule,
  ],
  exports: [
    ShowDashboardAdminComponent,
    ShowListAdminComponent,
  ],
  entryComponents: [ShowCrudDialogBoxComponent]
})
export class ShowAdminModule {
}
