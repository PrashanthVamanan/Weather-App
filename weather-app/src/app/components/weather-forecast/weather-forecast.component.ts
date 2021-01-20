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
  useMockData: boolean;

  currentLocation: string;
  isCurrentWeatherDataFetched: boolean;
  isHistoricalWeatherDataFetched: boolean;

  mockApiResponseForWeatherInfo : any = {};
  mockApiResponseForPastWeatherInfo: any[] = [];

  formattedWeatherResponse: any = {};
  formattedPastWeatherResponse: any[] = [];

  pastFiveDaysTimeStamps: any[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private utilSrv : UtilService,
    private httpSrv : HttpService,
    private appStateSrv: AppStateService) { }

  ngOnInit() {

    this.useMockData = WEATHER_APP_CONSTANTS.USE_MOCK_DATA;

    this.currentLocation = this.appStateSrv.getSelectedGeoLocation();
    
    this.currentLocation = this.useMockData ? 'Madurai, Tamilnadu, India' : this.currentLocation;
    this.isCurrentWeatherDataFetched = this.useMockData ? true : false;
    this.isHistoricalWeatherDataFetched = this.useMockData ? true : false;

    let { latitude, longitude } = this.utilSrv.getLatAndLongForPlaceName();

    this.latitude = latitude;
    this.longitude = longitude;

    this.pastFiveDaysTimeStamps = this.utilSrv.getUnixTimeStampsOfPastFiveDays();

    this.fetchWeatherDetailsForLatLong();
    this.fetchHistoricalWeatherDataForPastFiveDays();
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

    if(this.useMockData) {
      this.mockApiResponseForWeatherInfo = WEATHER_APP_MOCK_RESPONSE.WEATHER_INFO_FOR_LAT_LONG;
      this.formattedWeatherResponse = this.utilSrv.formatCurrentWeatherInfoResponse(this.currentLocation, this.mockApiResponseForWeatherInfo);
    } else {
      this.httpSrv
      .makeGetApiCall(
        'GET_CURRENT_WEATHER_FORECAST',
         WEATHER_APP_CONSTANTS.CURRENT_WEATHER_BASE_URL,
         options)
      .subscribe((response : any) => {
        // console.log("Current Location ", this.currentLocation);
        this.isCurrentWeatherDataFetched = true;
        this.formattedWeatherResponse = this.utilSrv.formatCurrentWeatherInfoResponse(this.currentLocation, response);
        // console.log("Formatted Weather Response ", this.formattedWeatherResponse);
      }, error => {
        console.log("Error in fetching weather details for lat long ", error);
      })
    }
  }

  fetchHistoricalWeatherDataForPastFiveDays() {
    let { appid, units } = WEATHER_APP_API_CONFIG.OPEN_WEATHER_API_CONFIG;
    let apiCalls = [];

    if(this.useMockData) {
      this.mockApiResponseForPastWeatherInfo = WEATHER_APP_MOCK_RESPONSE.PAST_FIVE_DAYS_FORECAST;
      this.formattedPastWeatherResponse = this.utilSrv.formatPastFiveDaysWeatherInfoResponse(this.mockApiResponseForPastWeatherInfo);
    } else {
      this.pastFiveDaysTimeStamps.forEach((timestamp: number) => {
        let options = {
          'queryParams': {
            lat: this.latitude,
            lon: this.longitude,
            dt: timestamp,
            units,
            appid
          }
        }
        apiCalls.push(this.httpSrv.makeGetApiCallWithPromise('GET_PREVIOUS_DAYS_WEATHER_FORECAST', WEATHER_APP_CONSTANTS.CURRENT_WEATHER_BASE_URL, options));
      })

      Promise.all(apiCalls).then((response : any) => {
        // console.log("Response received ", response);
        this.isHistoricalWeatherDataFetched = true;
        this.formattedPastWeatherResponse = this.utilSrv.formatPastFiveDaysWeatherInfoResponse(response);
      }).catch((err : any) => {
        console.log("Error during multiple api calls ", err);
      })
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
