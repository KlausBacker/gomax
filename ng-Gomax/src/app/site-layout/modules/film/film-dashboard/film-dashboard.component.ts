import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilmListComponent} from '../film-list/film-list.component';

@Component({
  selector: 'gmx-film-dashboard',
  templateUrl: './film-dashboard.component.html',
  styleUrls: ['./film-dashboard.component.scss']
})
export class FilmDashboardComponent implements OnInit {

  @ViewChild('mainTitle', {read: ElementRef, static: false})
  mainTitle: ElementRef;


  @ViewChild(FilmListComponent, {static: false})
  FilmListComponent: FilmListComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
