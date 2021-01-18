import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-weather-info',
  templateUrl: './general-weather-info.component.html',
  styleUrls: ['./general-weather-info.component.scss']
})
export class GeneralWeatherInfoComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
