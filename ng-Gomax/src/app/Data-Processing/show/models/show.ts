import {RoomShow} from '../../room/models/roomShow';
import {Film} from '../../film/models/film';
import {Cinema} from '../../cinema/models/cinema';

export class Show {

  constructor(
    /*tslint:disable:variable-name*/
    public id: number,
    public startTime?: string,
    public endTime?: string,
    public status?: number,
    public film?: Film,
    public cinema?: Cinema,
    public roomShow?: RoomShow,
  ) {
  }
}
