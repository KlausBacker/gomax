import {Component, Input, OnInit} from '@angular/core';
import {Row} from '../../../../Data-Processing/rooplan/models/row';

@Component({
  selector: 'gmx-room-row',
  templateUrl: './room-row.component.html',
  styleUrls: ['./room-row.component.scss']
})
export class RoomRowComponent implements OnInit {

  @Input()
  row: Row;

  constructor() {
  }

  ngOnInit() {
  }

}
