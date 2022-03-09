import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherInfoCardComponent } from './components/weather-info-card/weather-info-card.component';
import { SportCardComponent } from './components/sport-card/sport-card.component';
import {MaterialModule} from "../../shared/modules/material.module";



@NgModule({
  declarations: [
    DashboardPageComponent,
    WeatherInfoCardComponent,
    SportCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
