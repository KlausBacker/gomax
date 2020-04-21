import {Price} from "./price";

export class JsonResponse {
  constructor(
    public id: number,
    public startTime: string,
    public pricingCinema: Price[],
  ) {
  }
}

