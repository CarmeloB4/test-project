import { Component, OnInit } from '@angular/core';
import {WeatherFacade} from "../../../../shared/store/facades/weather.facade";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private weatherFacade: WeatherFacade) { }

  ngOnInit(): void {
    this.weather()
  }

  public getCurrentWeather():void {
    this.weatherFacade.getCurrentWeather('Palermo')
  }

  private weather():void {
    this.weatherFacade.weather$().subscribe((x) => console.log(x))
  }

}
