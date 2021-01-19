import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { UtilService } from 'src/app/services/util.service';
import { HttpService } from 'src/app/services/http.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { WEATHER_APP_CONSTANTS } from 'src/app/constants/proj.cnst';
import { WEATHER_APP_API_CONFIG } from 'src/app/config/api-config';
import { WEATHER_APP_MOCK_RESPONSE } from 'src/app/constants/mock-api-data.cnst';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit, OnDestroy {

  //*Lat, Long, place hardcoded for now, need to pick from util service later
  latitude: number;
  longitude: number;
  currentLocation: string = 'Madurai, Tamilnadu, India'

  mockApiResponseForWeatherInfo : any = {};
  mockApiResponseForPastWeatherInfo: any[] = [];
  formattedWeatherResponse: any = {};
  pastFiveDaysTimeStamps: any[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private utilSrv : UtilService,
    private httpSrv : HttpService,
    private appStateSrv: AppStateService) { }

  ngOnInit() {
    const selectedGeoLocationRef = this.appStateSrv.selectedGeoLocationRef.subscribe((location: string) => {
      this.currentLocation = location;
    })

    this.latitude = 11.052213;
    this.longitude = 78.408526;
    this.pastFiveDaysTimeStamps = this.utilSrv.getUnixTimeStampsOfPastFiveDays();
    console.log(this.pastFiveDaysTimeStamps);

    this.fetchWeatherDetailsForLatLong();
    this.fetchHistoricalWeatherDataForPastFiveDays();

    this.subscriptions.push(selectedGeoLocationRef);
  }

  fetchWeatherDetailsForLatLong() {

    let { appid, units, exclude } = WEATHER_APP_API_CONFIG.OPEN_WEATHER_API_CONFIG;

    let options = {
      'queryParams': {
        lat: this.latitude,
        lon: this.longitude,
        exclude,
        units,
        appid
      }
    }

    this.mockApiResponseForWeatherInfo = WEATHER_APP_MOCK_RESPONSE.WEATHER_INFO_FOR_LAT_LONG;
    this.formattedWeatherResponse = this.utilSrv.formatCurrentWeatherInfoResponse(this.currentLocation, this.mockApiResponseForWeatherInfo);

    // console.log(this.formattedWeatherResponse);

    // this.httpSrv
    //   .makeGetApiCall(
    //     'GET_CURRENT_WEATHER_FORECAST',
    //      WEATHER_APP_CONSTANTS.CURRENT_WEATHER_BASE_URL,
    //      options)
    //   .subscribe((response : any) => {
    //     console.log("Response ", response);
    //   }, error => {
    //     console.log("Error in fetching weather details for lat long ", error);
    //   })
  }

  fetchHistoricalWeatherDataForPastFiveDays() {
    let { appid, units } = WEATHER_APP_API_CONFIG.OPEN_WEATHER_API_CONFIG;
    let apiCalls = [];

    // this.pastFiveDaysTimeStamps.forEach((timestamp: number) => {
    //   let options = {
    //     'queryParams': {
    //       lat: this.latitude,
    //       lon: this.longitude,
    //       dt: timestamp,
    //       units,
    //       appid
    //     }
    //   }

    //   apiCalls.push(this.httpSrv.makeGetApiCallWithPromise('GET_PREVIOUS_DAYS_WEATHER_FORECAST', WEATHER_APP_CONSTANTS.CURRENT_WEATHER_BASE_URL, options));
    // })

    // console.log("Api calls here ", apiCalls);

    // Promise.all(apiCalls).then((response : any) => {
    //   console.log("Response received ", response);
    // }).catch((err : any) => {
    //   console.log("Error during multiple api calls ", err);
    // })

    this.mockApiResponseForPastWeatherInfo = WEATHER_APP_MOCK_RESPONSE.PAST_FIVE_DAYS_FORECAST;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
