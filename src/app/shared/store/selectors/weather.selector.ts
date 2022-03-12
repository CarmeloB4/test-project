import {WeatherState} from "../reducers/weather.reducer";
import {createSelector} from "@ngrx/store";

export interface AppState {
  weatherState: WeatherState;
}

export const selectWeatherState = (state: AppState) => state.weatherState;

export const selectWeather = createSelector(selectWeatherState,(selectWeather) => selectWeather);
