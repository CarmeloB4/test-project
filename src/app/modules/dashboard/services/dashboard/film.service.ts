import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private sports = ["tennis", "running", "padel", "crossfit", "cycling", "football", "yoga", "gym"];
  constructor() { }

  getSports(): string[] {
    return this.sports.slice(4)
  }
}
