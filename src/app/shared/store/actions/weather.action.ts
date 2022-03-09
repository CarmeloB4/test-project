import {createAction, props} from '@ngrx/store';
import {Weather} from "../../models/weather.model";

export const getWeather = createAction(
  '[Weather] Get Weather',
  props<{city: string }>()
)

export const getWeatherSuccess = createAction(
  '[Weather] Get Weather Success',
  props<{weather: Weather }>()
)

