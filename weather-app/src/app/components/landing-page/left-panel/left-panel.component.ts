import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { isNullOrUndefined } from 'util';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

import { WEATHER_APP_API_CONFIG } from '../../../config/api-config';
import { WEATHER_APP_CONSTANTS } from 'src/app/constants/proj.cnst';

import { UtilService } from 'src/app/services/util.service';
import { WEATHER_APP_MOCK_RESPONSE } from 'src/app/constants/mock-api-data.cnst';
import { AppStateService } from 'src/app/services/app-state.service';
import { Country } from 'src/app/models/country.model';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  weatherAppCitiesApiConfig : any = {};
  currentCitiesAccessToken : any;

  countriesList: any[] = [];
  statesList: any[] = [];
  citiesList: any[] = [];

  selectedGeoInfo: string = null;
  useMockData: boolean;

  latitude: number = null;
  longitude: number = null;

  constructor(
    private router: Router,
    private httpSrv: HttpService,
    private utilSrv: UtilService,
    private appStateSrv: AppStateService,
    private storageSrv: StorageService) { }

  ngOnInit() { 
    this.useMockData = WEATHER_APP_CONSTANTS.USE_MOCK_DATA;
    this.weatherAppCitiesApiConfig = WEATHER_APP_API_CONFIG.CITIES_API_CONFIG;
    this.getAuthTokenForCitiesApi();
  }

  getAuthTokenForCitiesApi() {
    let currentCredentials = this.storageSrv.getValue('auth-token');
    let auth_token;
    let expiresAt;

    if(!isNullOrUndefined(currentCredentials)) {
      currentCredentials = JSON.parse(currentCredentials);
      auth_token = currentCredentials['auth_token'];
      expiresAt = currentCredentials['expiresAt'];
    }

    let currentTime = +new Date();

    //*If there is no auth token present in local storage
    if (isNullOrUndefined(auth_token)) {
      this.callGetAccessTokenApi();
    }
    //*If the auth token present is more than 24 hours old
    else if ((currentTime - (+new Date(expiresAt))) > WEATHER_APP_CONSTANTS.ONE_DAY_IN_MILLISECONDS) {
      this.storageSrv.deleteValue('auth-token');
      this.callGetAccessTokenApi();
    } else {
      this.currentCitiesAccessToken = auth_token;
      this.getAllCountries();
    }
  }

  callGetAccessTokenApi() {
    let options = {
      headers: {
        'api-token': this.weatherAppCitiesApiConfig['api-token'],
        'user-email': this.weatherAppCitiesApiConfig['user-email']
      }
    }

    this.httpSrv
      .makeGetApiCall(
        'GET_AUTH_TOKEN_CITIES_API',
        WEATHER_APP_CONSTANTS.CITIES_BASE_URL,
        options)
      .subscribe((response: any) => {
        let { auth_token = null } = response;

        if (!isNullOrUndefined(auth_token)) {
          this.currentCitiesAccessToken = auth_token;
          this.storageSrv.setValueWithTimeStamp('auth-token', { token: auth_token });
          this.getAllCountries();
        }

      }, error => {
        console.log("Error in obtaining access token ", error);
      })
  }
  
  getAllCountries() {
    let options = this.utilSrv.getBearerTokenFormatForApiRequests(this.currentCitiesAccessToken);

    if (this.useMockData) {
      this.countriesList = WEATHER_APP_MOCK_RESPONSE.COUNTRIES_LIST;
    } else {
      this.httpSrv
        .makeGetApiCall(
          'GET_ALL_COUNTRIES',
          WEATHER_APP_CONSTANTS.CITIES_BASE_URL,
          options)
        .subscribe((response: Country[]) => {
          this.countriesList = response.map(country => country.country_name);
          // console.log("Countries List ", this.countriesList);
        }, error => {
          console.log("Error in fetching countries list ", error);
        })
    }
  }

  handleCountrySelection(country: string) {
   let options = {
     'urlParams': {
       country
     }
   }

   options = {...options, ...this.utilSrv.getBearerTokenFormatForApiRequests(this.currentCitiesAccessToken)};

   if(this.useMockData) {
      this.statesList = WEATHER_APP_MOCK_RESPONSE.STATES_FOR_A_COUNTRY;
      this.appStateSrv.setStatesList(this.statesList);
   } else {
      this.httpSrv
      .makeGetApiCall(
        'GET_ALL_STATES_FOR_A_COUNTRY',
         WEATHER_APP_CONSTANTS.CITIES_BASE_URL,
         options
        )
      .subscribe((response: any[]) => {
        this.statesList = response.map(item => item.state_name);
        // console.log("States list ", this.statesList);
        this.appStateSrv.setStatesList(this.statesList);
      })
   }
  }

  handleStateSelection(state: string) {
    let options = {
      'urlParams': {
        state
      }
    }

    options = {...options, ...this.utilSrv.getBearerTokenFormatForApiRequests(this.currentCitiesAccessToken)};

    if (this.useMockData) {
      this.citiesList = WEATHER_APP_MOCK_RESPONSE.CITIES_FOR_A_STATE;
      this.appStateSrv.citiesListRef.next(this.citiesList);
    } else {
      this.httpSrv
        .makeGetApiCall(
          'GET_ALL_CITIES_FOR_A_STATE',
          WEATHER_APP_CONSTANTS.CITIES_BASE_URL,
          options)
        .subscribe((response: any[]) => {
          this.citiesList = response.map(item => item.city_name);
          // console.log("Cities List ", this.citiesList);
          this.appStateSrv.citiesListRef.next(this.citiesList);
        })
    }
  }

  handleCitySelection(location: any) {
    this.selectedGeoInfo = this.utilSrv.getPlaceNameFromCountryStateAndCity(location);
    // console.log("Selected Geo Info ", this.selectedGeoInfo);
    this.getLatLongForPlaceName(this.selectedGeoInfo);
  }

  getLatLongForPlaceName(placeName: string) {

    let { access_key, output, limit } =  WEATHER_APP_API_CONFIG.GEOCODING_API_CONFIG;

    let geoCodeOptions = {
      'queryParams': {
        query: placeName,
        output,
        limit,
        access_key
      }
    }

    if (this.useMockData) {
      let mockData = WEATHER_APP_MOCK_RESPONSE.LAT_LONG_FOR_COUNTRY_STATE_CITY.data[0];
      this.setLatitudeAndLongitude(mockData.latitude, mockData.longitude);
    } else {
      this.httpSrv
        .makeGetApiCall(
          'GET_LAT_LONG_FOR_PLACE_NAME',
          WEATHER_APP_CONSTANTS.GEOCODING_BASE_URL,
          geoCodeOptions)
        .subscribe((response: any) => {
          // console.log("Lat Long Response ", response);
          let latLongResponse = response.data[0];
          this.setLatitudeAndLongitude(latLongResponse.latitude, latLongResponse.longitude);
        }, error => {
          console.log("Error in fetching lat long for placename ", error);
        })
    }
  }

  setLatitudeAndLongitude(latitude: number, longitude: number) {
    if(!isNullOrUndefined(latitude) && !isNullOrUndefined(longitude)) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }

  navigateToForecastPage() {
    this.utilSrv.setLatAndLongForPlaceName(this.latitude, this.longitude);
    // console.log(this.selectedGeoInfo);
    this.appStateSrv.setSelectedGeoLocation(this.selectedGeoInfo);
    this.router.navigate(['', 'forecast']);
  }
}
