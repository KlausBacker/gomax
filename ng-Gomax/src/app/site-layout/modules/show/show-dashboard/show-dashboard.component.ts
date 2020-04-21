import {Component, OnInit, ViewChild} from '@angular/core';
import {ShowListComponent} from '../show-list/show-list.component';

@Component({
  selector: 'gmx-show-dashboard',
  templateUrl: './show-dashboard.component.html',
  styleUrls: ['./show-dashboard.component.scss']
})
export class ShowDashboardComponent implements OnInit {

  @ViewChild(ShowListComponent, {static: false})
  ShowListComponent: ShowListComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
