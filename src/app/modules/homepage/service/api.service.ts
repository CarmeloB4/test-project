import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, tap} from 'rxjs';
import { environment } from 'src/environments/environment';
import {Weather, WeatherResponse} from "../../../shared/models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getWeather(city:string): Observable<Weather> {
    let params = new HttpParams()
      .set('access_key',environment.APY_KEY_WEATHER)
      .set('query', city)
    return this.http.get<WeatherResponse>(environment.APY_URL_WEATHER, { params })
      .pipe(
        map((response) => Weather.Build(response)));
  }
}
