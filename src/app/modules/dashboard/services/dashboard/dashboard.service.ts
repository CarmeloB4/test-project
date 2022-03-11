import { Injectable } from '@angular/core';

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

  getSports(degrees: number): Sports[] {
    return degrees > 8 && true ? this.sports.filter((s) => s.outdoor) : this.sports.filter((s) => !s.outdoor)
  }

}
