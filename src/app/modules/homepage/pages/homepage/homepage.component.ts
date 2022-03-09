import { Component, OnInit } from '@angular/core';
import {WeatherFacade} from "../../../../shared/store/facades/weather.facade";
import {Weather} from "../../../../shared/models/weather.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public currentWeather!:Weather | null;
  public cityForm = this.fb.control('', Validators.required)
  constructor(private readonly weatherFacade: WeatherFacade, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.setWeatherData()
  }

  public getCurrentWeather():void {
    this.weatherFacade.getCurrentWeather(this.cityForm.value)
  }

  private setWeatherData():void {
    this.weatherFacade.weather$().subscribe((response) => this.currentWeather = response.weather)
  }

}
