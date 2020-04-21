import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Film} from '../../../../Data-Processing/film/models/film';
import {FilmService} from '../../../../Data-Processing/film/services/film.service';
import {ShowService} from '../../../../Data-Processing/show/services/show.service';
import {RoomService} from 'src/app/Data-Processing/room/services/room.service';
import {RoomShow} from 'src/app/Data-Processing/room/models/roomShow';
import {Cinema} from '../../../../Data-Processing/cinema/models/cinema';

// tslint:disable-next-line:class-name
export interface show {
  startTime: string;
  endTime: string;
  film: Film;
  cinema: Cinema;
  room: RoomShow;
}

@Component({
  selector: 'gmx-show-crud-dialog-box',
  templateUrl: './show-crud-dialog-box.component.html',
  styleUrls: ['./show-crud-dialog-box.component.scss']
})
export class ShowCrudDialogBoxComponent implements OnInit {

  films: Array<Film>;
  rooms: Array<RoomShow>;
  action: string;
  localData: any;

  constructor(
    public dialogRef: MatDialogRef<ShowCrudDialogBoxComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: show,
    private filmService: FilmService,
    private roomService: RoomService,
    private showService: ShowService) {
    console.log(data);
    this.localData = {...data};
    this.action = this.localData.action;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.localData});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

  ngOnInit() {
    this.loadFilmsObservable();
    this.loadRoomsObservable();
  }

  private loadFilmsObservable() {
    this.filmService.getFilms()
      .subscribe(res => this.films = res);
  }

  private loadRoomsObservable() {
    this.roomService.getRoomsObservable()
      .subscribe(res => this.rooms = res);
  }

}
