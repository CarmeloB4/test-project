import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getWeather(): Observable<any> {
    let params = new HttpParams()
      .set('access_key',environment.APY_KEY_WEATHER)
      .set('query', 'Palermo')
    return this.http.get(environment.APY_URL_WEATHER, {params})
  }
}
