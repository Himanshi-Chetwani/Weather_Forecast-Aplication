/*
File Name : app.component.ts
Date : 12th Dec 2019
Gives the title of the page
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast';
}
