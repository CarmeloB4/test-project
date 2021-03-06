import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { weatherReducer } from "./shared/store/reducers/weather.reducer";
import { WeatherEffects } from "./shared/store/effects/weather.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import {MaterialModule} from "./shared/modules/material.module";
import {LoaderInterceptor} from "./shared/services/loader.interceptor";

@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        StoreModule.forRoot({weatherState: weatherReducer}),
        StoreDevtoolsModule.instrument({maxAge: 25}),
        EffectsModule.forRoot([WeatherEffects]),
        BrowserAnimationsModule,
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }],
    bootstrap: [AppComponent]
})
export class AppModule { }
