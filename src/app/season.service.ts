/*
File Name : season.service.ts
Date : 12th Dec 2019
HTTP get to API
 */

// Importing Http Client and Observbles
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http"; 
@Injectable({
  providedIn: 'root'
})

// Returning the fetched data
export class SeasonService {
  //API Call with URL
  apiUrl="http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
  // Costructor to dispaly data
  constructor(private http: HttpClient) { }
  // Fetching the data
  getData(value):Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+value+"?apikey=nthm8qb6SM1ltZAFAIVFkzu0ysmdnNzC&language=en-us&details=true")
  }
}
