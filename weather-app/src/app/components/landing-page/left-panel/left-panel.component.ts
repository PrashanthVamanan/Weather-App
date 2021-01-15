import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../../services/http.service';
import { WEATHER_APP_CONSTANTS } from '../../../constants/proj.cnst';
import { WEATHER_APP_MOCK_RESPONSE } from '../../../constants/mock-api-data.cnst';
import { UtilService } from 'src/app/services/util.service';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
