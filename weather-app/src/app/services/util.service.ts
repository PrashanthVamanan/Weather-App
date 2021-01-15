import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

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
}