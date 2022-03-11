import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Film, FilmResponse} from "../../../../shared/models/film.model";
import {Weather} from "../../../../shared/models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class ApiFilmService {

  constructor(private http: HttpClient) { }

  public getRandomFilm(): Observable<Film> {
    const randomFilmId = Math.floor(Math.random() * (1000 - 500 + 1) + 500);

    let params = new HttpParams()
      .set('api_key', environment.APY_KEY_FILM)
      .set('language','it-IT')

    return this.http.get<FilmResponse>(`https://api.themoviedb.org/3/movie/${randomFilmId}`,{ params })
      .pipe(
        map((response) => Film.Build(response))
      );
  }
}
