import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherApiService } from "../../../modules/homepage/service/weather-api.service";
import { Injectable } from "@angular/core";
import { getWeather, getWeatherSuccess } from "../actions/weather.action";
import { exhaustMap, map } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../selectors/weather.selector";


@Injectable()
export class WeatherEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly apiWeatherService: WeatherApiService,
    private readonly store: Store<AppState>,
  ) {}

  getWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeather),
      exhaustMap(({ city }) => this.apiWeatherService.getWeather(city)
        .pipe(map((weather) => this.store.dispatch(getWeatherSuccess({ weather })))))
    )
  ,{ dispatch: false })
}
