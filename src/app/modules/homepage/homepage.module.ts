import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';



@NgModule({
  declarations: [
    HomepageComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
