import { createReducer, on } from '@ngrx/store';
import { Weather } from "../../models/weather.model";
import { getWeatherSuccess } from "../actions/weather.action";

export interface WeatherState {
  weather: Weather | null;
}

export const initialState: WeatherState = {
  weather: null
}

export const weatherReducer = createReducer(
  initialState,
  on(getWeatherSuccess,(state,{ weather }) => ({ ...state, weather }))
);
