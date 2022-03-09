import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {weatherReducer} from "./shared/store/reducers/weather.reducer";
import {WeatherEffects} from "./shared/store/effects/weather.effect";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ weather: weatherReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([WeatherEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
