import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {WeatherState} from "../../../../shared/store/reducers/weather.reducer";
import {Weather} from "../../../../shared/models/weather.model";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
@Input() currentWeather!:Weather | null;
  constructor() { }

  ngOnInit(): void {
  }

}
