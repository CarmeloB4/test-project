import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WeatherInfoCardComponent } from './components/weather-info-card/weather-info-card.component';
import { SportCardComponent } from './components/sport-card/sport-card.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    WeatherInfoCardComponent,
    SportCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
