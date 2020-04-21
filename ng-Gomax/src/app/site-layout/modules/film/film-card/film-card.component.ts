import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../../Data-Processing/film/models/film';

@Component({
  selector: 'gmx-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input()
  film: Film;

  constructor() {
  }

  ngOnInit() {
  }

}
