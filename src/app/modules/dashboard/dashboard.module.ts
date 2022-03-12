import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherInfoCardComponent } from './components/weather-info-card/weather-info-card.component';
import { SportCardComponent } from './components/sport-card/sport-card.component';
import { MaterialModule } from "../../shared/modules/material.module";
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from "@angular/forms";
import { DashboardService } from "./services/dashboard/dashboard.service";
import { ApiFilmService } from "./services/api/api-film.service";



@NgModule({
  declarations: [
    DashboardPageComponent,
    WeatherInfoCardComponent,
    SportCardComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DashboardService, ApiFilmService],
})
export class DashboardModule { }
