/*
File Name : app.module.ts
Date : 12th Dec 2019
Type Script file for all the data
*/

//  imports all required modules, compoennts and services
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MatTableModule } from '@angular/material'
import { SeasonService } from './season.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //ngModel lives here
import { HttpClient } from 'selenium-webdriver/http';

// Ues NgModel for binging purposes
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  // imports the models
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule
  ],
  // the service and the formatting
  providers: [SeasonService],
  bootstrap: [AppComponent]
})
// Exports the model
export class AppModule { }
