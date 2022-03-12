import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    HomepageComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
