import { Component, Input } from '@angular/core';
import { Weather } from "../../../../shared/models/weather.model";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
@Input() currentWeather!:Weather | null;
  constructor() { }
}
