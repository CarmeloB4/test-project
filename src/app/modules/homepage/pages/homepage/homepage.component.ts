import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherFacade } from "../../../../shared/store/facades/weather.facade";
import { Weather } from "../../../../shared/models/weather.model";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  public currentWeather!:Weather | null;
  public cityForm = this.fb.control('', Validators.required);

  private destroy$ = new Subject();
  constructor(private readonly weatherFacade: WeatherFacade, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.setWeatherData()
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public getCurrentWeather():void {
    this.weatherFacade.getCurrentWeather(this.cityForm.value)
  }

  private setWeatherData():void {
    this.weatherFacade.weather$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => this.currentWeather = response.weather)
  }
}
