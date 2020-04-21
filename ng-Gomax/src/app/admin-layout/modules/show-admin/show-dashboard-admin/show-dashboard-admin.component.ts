import {Component, OnInit, ViewChild} from '@angular/core';
import {ShowListAdminComponent} from '../show-list-admin/show-list-admin.component';

@Component({
  selector: 'gmx-show-dashboard-admin',
  templateUrl: './show-dashboard-admin.component.html',
  styleUrls: ['./show-dashboard-admin.component.scss']
})
export class ShowDashboardAdminComponent implements OnInit {


  @ViewChild(ShowListAdminComponent, {static: false})
  ShowListAdminComponent: ShowListAdminComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
