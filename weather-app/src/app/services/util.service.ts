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

  formatPastFiveDaysWeatherInfoResponse(response: any[]) {
    let formattedResponse = [];

    response.forEach((record: any) => {
      let { current, hourly } = record;
      let { dt, temp, weather } = current;
      let { icon, description } = weather[0];
      let avgTemp = this.getAvgTemperatureForTheDay(hourly);

      let previousDay = {
        dt,
        max: temp,
        min: avgTemp,
        desc: description,
        icon_url: this.getWeatherIconUrl(icon)
      }

      formattedResponse.push(previousDay);
    })
    return formattedResponse;
  }

  getAvgTemperatureForTheDay(hourlyTemps: any[]) {
    let sum = 0;
    let totalNumberOfRecords = WEATHER_APP_CONSTANTS.NO_OF_HOURS_IN_A_DAY;

    hourlyTemps.forEach((forecast: any) => {
      let { temp } = forecast;
      sum += temp;
    })

    return Math.round(sum / totalNumberOfRecords);
  }

  getWeatherIconUrl(iconId: string) {
    return `${WEATHER_APP_CONSTANTS.WEATHER_ICON_BASE_URL}${iconId}.png`;
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

  getDayOfTheWeekFromUnixTimestamp(unixTs: number) : string {
    let actualTs = unixTs * 1000;
    let actualDate = new Date(actualTs);
    let actualDayOfTheWeek = actualDate.getDay().toString();
    return WEATHER_APP_CONSTANTS.DAY_OF_THE_WEEK[actualDayOfTheWeek];
  }
}