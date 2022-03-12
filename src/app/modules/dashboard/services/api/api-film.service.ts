import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import { environment } from "../../../../../environments/environment";
import { Film, FilmResponse } from "../../../../shared/models/film.model";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable()

export class ApiFilmService {

  constructor(private http: HttpClient, private readonly _snackBar: MatSnackBar) { }

  public getRandomFilm(): Observable<Film> {
    const randomFilmId = Math.floor(Math.random() * (1000 - 500 + 1) + 500);

    const params = new HttpParams()
      .set('api_key', environment.APY_KEY_FILM)
      .set('language','it-IT')

    return this.http.get<FilmResponse>(`https://api.themoviedb.org/3/movie/${randomFilmId}`,{ params })
      .pipe(
        map((response) => Film.Build(response)),
        catchError((err) => {
          this._snackBar.open("Ops, try again!","Close",{
            duration: 3000
          });
          return of()
        })
      );
  }
}
