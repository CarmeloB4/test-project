import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface Sports {
  outdoor: boolean;
  sport: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private sports:Sports[] = [
    { outdoor: true, sport:"tennis" },
    { outdoor: true, sport: "running" },
    { outdoor: false, sport: "padel" },
    { outdoor: false, sport: "crossfit" },
    { outdoor: true, sport: "cycling" },
    { outdoor: true, sport: "football" },
    { outdoor: false, sport: "yoga" },
    { outdoor: false, sport: "gym" }
  ];
  constructor() { }

  public getSports(degrees: number): Sports[] {
    return degrees > 8 && true ? this.sports.filter((s) => s.outdoor) : this.sports.filter((s) => !s.outdoor)
  }

  public getCalculatedCalories(sport: string, weigth: number, timeOfActivity: number): Observable<number> {
    let index = 1;

    switch (sport) {
      case "tennis" :
        index = 1.5;
        return of(weigth * timeOfActivity * index);
      case "running" :
        index = 1.8;
        return of(weigth * timeOfActivity * index);
      case "padel" :
        index = 1.2;
        return of(weigth * timeOfActivity * index);
      case "crossfit" :
        index = 1.7;
        return of(weigth * timeOfActivity * index);
      case "cycling" :
        index = 1.8;
        return of(weigth * timeOfActivity * index);
      case "football" :
        index = 1.2;
        return of(weigth * timeOfActivity * index);
      case "yoga" :
        index = 1.4;
        return of(weigth * timeOfActivity * index);
      case "gym" :
        index = 1.5;
        return of(weigth * timeOfActivity * index);
      default:
        return of(0)
    }
  }

}
