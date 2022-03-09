import {WeatherState} from "../reducers/weather.reducer";
import {createSelector} from "@ngrx/store";

export class AppState {
  weather!: WeatherState;
}

export const selectWeatherState = (state: AppState) => state.weather;

export const selectWeather = createSelector(selectWeatherState,(selectWeather) => selectWeather);
