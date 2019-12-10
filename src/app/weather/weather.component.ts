/*
File Name : weather.component.ts
Date : 10th Dec 2019
Author : Himanshi Chetwani
*/

//Importing the required compoenets
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SeasonService } from '../season.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as moment from 'moment';
import { DataSource } from '@angular/cdk/table';
export interface PeriodicElement {
  date: string;
  maxTemp: number;
  minTemp: number;
  rFMax: number;
  rFMin: number;
  wSpeed : number;
}

// Directing to the html and css page of the Type script
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
//Exportig the data too html
export class WeatherComponent implements OnInit {

  //Columns of the table - Agular Material Design
  displayedColumns: string[] = ['date', 'maxTemp', 'minTemp', 'rFMax', 'rFMin', 'wSpeed'];
  dataSource : any ;

  constructor(private seasonService: SeasonService) { }

  ngOnInit() { 
  }

  //Data being trasfered to html
  weatherData : any
  newCity : string;
  newData = [];
  currentDateTime : any;
  newDate: any;
  @ViewChild("newCityField",{ static: true }) newCityField: ElementRef
  getData(value : String){
    this.seasonService.getData(this.newCity)
    .subscribe( (weatherData : any )=> {
      this.newData = weatherData.DailyForecasts;
      this.newDate = weatherData.DailyForecasts.Date;
      for (const element of this.newData) {
          element.Date=moment(element.Date).format("MMM Do YY");   
      } 
      this.dataSource = new MatTableDataSource(this.newData);
      this.weatherData=weatherData;
    })

  }
  

}
