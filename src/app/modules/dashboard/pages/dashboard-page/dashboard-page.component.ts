import { Component, OnInit } from '@angular/core';
import {Weather} from "../../../../shared/models/weather.model";
import {Subject, takeUntil} from "rxjs";
import {WeatherFacade} from "../../../../shared/store/facades/weather.facade";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public currentWeather!: Weather | null;
  public recommendedSports!: string[];
  private sports = ["tennis", "running", "padel", "crossfit", "cycling", "football", "yoga", "gym"];
  private destroy$ = new Subject();
  constructor(private readonly weatherFacade: WeatherFacade) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.getSports();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private getSports(): void {
    this.recommendedSports = this.sports.slice(4)
  }

  private getWeatherData(): void {
    this.weatherFacade.weather$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => this.currentWeather = response.weather)
  }

}
