import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private utilSrv : UtilService) { }

  ngOnInit() {
    console.log(this.utilSrv.getLatAndLongForPlaceName());
  }

}
