import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-weather-stats',
  templateUrl: './other-weather-stats.component.html',
  styleUrls: ['./other-weather-stats.component.scss']
})
export class OtherWeatherStatsComponent implements OnInit {

  @Input('stats') stats: any;

  constructor() { }

  ngOnInit() {
  }

}
