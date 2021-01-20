import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-general-weather-info',
  templateUrl: './general-weather-info.component.html',
  styleUrls: ['./general-weather-info.component.scss']
})
export class GeneralWeatherInfoComponent implements OnInit {

  @Input('weatherInfo') weatherInfo : any;

  currentDate: Date;

  constructor(private utilSrv: UtilService) { }

  ngOnInit() {
    // console.log(this.weatherInfo);
    this.weatherInfo = {... this.weatherInfo, iconUrl: this.utilSrv.getWeatherIconUrl(this.weatherInfo.icon)}
    this.currentDate = new Date();
  }

}
