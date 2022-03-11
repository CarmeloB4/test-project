import { Component, OnInit } from '@angular/core';
import {Weather} from "../../../../shared/models/weather.model";
import {Subject, takeUntil} from "rxjs";
import {WeatherFacade} from "../../../../shared/store/facades/weather.facade";
import {ApiFilmService} from "../../services/api/api-film.service";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import {Film} from "../../../../shared/models/film.model";
import {DashboardService, Sports} from "../../services/dashboard/dashboard.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  public currentWeather!: Weather | null;
  public recommendedSports!: string[];
  private destroy$ = new Subject();
  constructor(public dialog: MatDialog, private readonly weatherFacade: WeatherFacade, private service:ApiFilmService, private serviceDashboard: DashboardService) { }

  ngOnInit(): void {
    this.getWeatherData();
    this.getSports();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public openDialog(isStay:boolean, sport?: string, payload?: Film,): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {isStay, sport, payload},
    });

    dialogRef.componentInstance.calculateCalories.subscribe((result) => {
      dialogRef.componentInstance.data = {isStay, calories: 100}
    })
  }

  public getRandomFilm(): void {
    this.service.getRandomFilm()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
      this.openDialog(true, undefined, response)
    })
  }

  private getSports(): void {
    if (this.currentWeather) {
      const response = this.serviceDashboard.getSports(this.currentWeather?.temperature);
      response ? this.recommendedSports = response.map((s) => s.sport) : null;
    }
  }

  private getWeatherData(): void {
    this.weatherFacade.weather$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => this.currentWeather = response.weather)
  }

}
