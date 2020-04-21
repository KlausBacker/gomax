import {Component, OnInit, ViewChild} from '@angular/core';
import {Show} from '../../../../Data-Processing/show/models/show';
import {ShowService} from '../../../../Data-Processing/show/services/show.service';
import {Film} from '../../../../Data-Processing/film/models/film';
import {MatDialog, MatPaginator, MatTable} from '@angular/material';
import {ShowCrudDialogBoxComponent} from '../show-crud-dialog-box/show-crud-dialog-box.component';


@Component({
  selector: 'gmx-show-list-admin',
  templateUrl: './show-list-admin.component.html',
  styleUrls: ['./show-list-admin.component.scss']
})
export class ShowListAdminComponent implements OnInit {

  shows: Array<Show>;
  film: Film;
  data: Show[] = [];
  @ViewChild(ShowCrudDialogBoxComponent, {static: false})
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private showService: ShowService, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'salle', 'film', 'date', 'créneau', 'action'];

  ngOnInit() {
    this.loadShowsObservable();
    console.log(this.data);
  }

  private loadShowsObservable() {
    this.showService.getShowsObservable()
      .subscribe(res => this.shows = res);
  }


  openDialog(action, show) {
    show.action = action;
    const dialogRef = this.dialog.open(ShowCrudDialogBoxComponent, {
      width: '450px',
      data: show
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        // this.addNewShow(result.data);
      } else if (result.event === 'Update') {
        this.updateShow(result.data);
      } else if (result.event === 'Delete') {
        this.deleteShow(this.data);
      }
    });
  }

  // addNewShow(Show) {
  //   this.showService.addNewShow(Show);
  // }

  updateShow(id) {
    this.showService.updateShow(id);
  }

  deleteShow(id) {
    this.showService.deleteShow(id);
  }


}
