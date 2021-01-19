import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { WEATHER_APP_CONSTANTS } from '../constants/proj.cnst';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  latitude: number;
  longitude: number;

  checkIfObjectKeyHasValues(obj: any): boolean {
    if (isNullOrUndefined(obj)) return false;

    if (Object.keys(obj).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getBearerTokenFormatForApiRequests(accessToken : any) : any {
    let options = {};

    if(!isNullOrUndefined(accessToken)) {
      options['headers'] = { 
        'Authorization' : `Bearer ${accessToken}`
      }
    }

    return options;
  }

  getPlaceNameFromCountryStateAndCity(geoInfo: any) : string {
    let { country, state, city } = geoInfo;
    return `${city}, ${state}, ${country}`;
  }

  setLatAndLongForPlaceName(lat: number, long: number) : void {
    this.latitude = lat;
    this.longitude = long;
  }

  getLatAndLongForPlaceName() : any {
    return {
      latitude: this.latitude,
      longitude: this.longitude
    }
  }

  formatCurrentWeatherInfoResponse(currentGeoLocation: string, response : any) {
    let formattedResponse = {};

    let { current = null } = response;

    if(!isNullOrUndefined(current)) {
      let { weather = null, pressure, feels_like, wind_speed, humidity, uvi, dew_point } = current;

      formattedResponse = {
        generalInfo: {
          pressure,
          feels_like,
          wind_speed,
         'place': currentGeoLocation,
          'temp': current.temp,
          'desc': weather[0].description,
          'icon': weather[0].icon
        },
        stats: {
          humidity,
          uvi,
          dew_point
        }
      }
    }
    return formattedResponse;
  }

  getWeatherIconUrl(iconId: string) {
    return `${WEATHER_APP_CONSTANTS.WEATHER_ICON_BASE_URL}${iconId}@2x.png`;
  }

  getUnixTimeStampsOfPastFiveDays() : number[] {
    let unixTimeStamps = [];
    let currentDay = new Date();
    let previousDaysCount = WEATHER_APP_CONSTANTS.NO_OF_PREVIOUS_DAYS;

    for(let i = 1; i <= previousDaysCount; i++) {
      let previousDay = currentDay.setDate(currentDay.getDate() - i);
      let previousDayTs = Math.round(previousDay / 1000);
      unixTimeStamps.push(previousDayTs);
      currentDay = new Date();
    }
    return unixTimeStamps;
  }
}