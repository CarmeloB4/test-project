import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../../../../shared/models/weather.model";

@Component({
  selector: 'app-weather-info-card',
  templateUrl: './weather-info-card.component.html',
  styleUrls: ['./weather-info-card.component.scss']
})
export class WeatherInfoCardComponent implements OnInit {
@Input() currentWeather!: Weather | null;
  constructor() { }

  ngOnInit(): void {
  }

}
