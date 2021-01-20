import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-past-days-forecast',
  templateUrl: './past-days-forecast.component.html',
  styleUrls: ['./past-days-forecast.component.scss']
})
export class PastDaysForecastComponent implements OnInit {

  @Input('pastDaysForecastData') pastDaysForecastData;

  constructor(private utilSrv: UtilService) { }

  ngOnInit() {
    this.addDayOfTheWeekToForecastData();
  }

  addDayOfTheWeekToForecastData() {
    this.pastDaysForecastData = this.pastDaysForecastData.map(item => {
      return {
        ...item,
        dayOfTheWeek: this.utilSrv.getDayOfTheWeekFromUnixTimestamp(item.dt)
      }
    })
  }

}
