import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

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

}