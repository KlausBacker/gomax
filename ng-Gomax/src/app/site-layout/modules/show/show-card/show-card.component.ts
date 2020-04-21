import {Component, Input, OnInit} from '@angular/core';
import {Show} from '../../../../Data-Processing/show/models/show';

@Component({
  selector: 'gmx-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {
  @Input()
  show: Show;

  constructor() {
  }

  ngOnInit() {
  }

}
