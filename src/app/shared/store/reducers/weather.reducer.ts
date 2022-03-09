import { createReducer, on } from '@ngrx/store';
import { Weather } from "../../models/weather.model";
import {getWeather, getWeatherSuccess} from "../actions/weather.action";

export interface WeatherState {
  weather: Weather | null;
}

export const initialState: WeatherState = {
  weather: null
}

export const weatherReducer = createReducer(
  initialState,
  on(getWeather,(state) => ({ ...state, weather: state.weather })),
  on(getWeatherSuccess,(state,action) => ({ ...state, weather: action.weather}))
)
