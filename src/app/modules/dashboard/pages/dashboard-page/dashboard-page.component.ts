import { Component, OnInit } from '@angular/core';
import {Weather} from "../../../../shared/models/weather.model";
import {Subject, takeUntil} from "rxjs";
import {WeatherFacade} from "../../../../shared/store/facades/weather.facade";
import {ApiFilmService} from "../../services/api/api-film.service";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

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
  constructor(public dialog: MatDialog, private readonly weatherFacade: WeatherFacade, private service:ApiFilmService) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.getSports();
    this.service.getRandomFilm().subscribe((x) => console.log(x))
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public openDialog(isStay:boolean): void {
    this.dialog.open(DialogComponent, {
      data: {isStay},
    });
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
