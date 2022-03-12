import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material.module";



@NgModule({
  declarations: [
    HomepageComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
