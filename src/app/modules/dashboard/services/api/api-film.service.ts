import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiFilmService {

  constructor(private http: HttpClient) { }

  public getRandomFilm(): Observable<any> {
    //tipizzare e randomizzare numero
    let params = new HttpParams()
      .set('api_key', environment.APY_KEY_FILM)
      .set('language','it-IT')

    return this.http.get('https://api.themoviedb.org/3/movie/500',{ params })
  }
}
