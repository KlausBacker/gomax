import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Row} from '../../../../Data-Processing/rooplan/models/row';
import {SharedService} from "../../../../Data-Processing/shared.service";

@Component({
  selector: 'gmx-room-dashboard',
  templateUrl: './room-dashboard.component.html',
  styleUrls: ['./room-dashboard.component.scss']
})
export class RoomDashboardComponent implements OnInit, AfterContentChecked {

  @Input()
  Rows: Row[];

  seatAvailable: number;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.seatAvailable = this.sharedService.numberSeatLeftToChose;
  }

}
