import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, selectWeather } from "../selectors/weather.selector";
import { getWeather } from "../actions/weather.action";

@Injectable({
  providedIn: 'root',
})
export class WeatherFacade {
  public weather$ = () => this.store.select(selectWeather);

  constructor(private readonly store: Store<AppState>) {}

  public getCurrentWeather(city:string): void {
    this.store.dispatch(getWeather({ city }));
  }
}
