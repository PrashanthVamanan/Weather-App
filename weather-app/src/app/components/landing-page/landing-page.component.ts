import { Component, OnInit } from '@angular/core';

import { WEATHER_APP_CONSTANTS } from '../../constants/proj.cnst';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  weatherIconsForHeader : any = {};
  weatherIconsForFooter : any = {};

  constructor() { }

  ngOnInit() {
    this.weatherIconsForHeader = WEATHER_APP_CONSTANTS.LANDING_PAGE_HEADER_WEATHER_ICONS;
    this.weatherIconsForFooter = WEATHER_APP_CONSTANTS.LANDING_PAGE_FOOTER_WEATHER_ICONS;
  }

}
