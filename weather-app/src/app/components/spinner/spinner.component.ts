import { Component, OnInit } from '@angular/core';
import { WEATHER_APP_CONSTANTS } from 'src/app/constants/proj.cnst';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  spinnerOptions: any = {};

  constructor() { }

  ngOnInit() {
    let { type, size, bdColor, color, fullScreen } = WEATHER_APP_CONSTANTS.NGX_SPINNER_OPTIONS;

    this.spinnerOptions = {
      type,
      size,
      bdColor,
      color,
      fullScreen
    }
  }
}
