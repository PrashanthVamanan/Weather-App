import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { Observable, of } from 'rxjs';

import { WEATHER_APP_CONSTANTS } from '../constants/proj.cnst';
import { UtilService } from './util.service';

@Injectable({
  'providedIn': 'root'
})

export class HttpService {
  constructor(
    private http: HttpClient,
    private utilSrv: UtilService) { }

  makeGetApiCall(apiEndpoint: string, baseUrl: string, options?: any) : Observable<any> {
    let endpoint = this.getApiEndPoint(apiEndpoint);
    let paramsObj;
    let headers;

    if(!isNullOrUndefined(endpoint)) {

      let isUrlParamsPresent = this.utilSrv.checkIfObjectKeyHasValues(options['urlParams']);
      let isQueryParamsPresent = this.utilSrv.checkIfObjectKeyHasValues(options['queryParams']);
      let isHeadersPresent = this.utilSrv.checkIfObjectKeyHasValues(options['headers']);

      if (isUrlParamsPresent) {
        endpoint = this.addOptionsToEndPoint(endpoint, options['urlParams']);
      }

      if (isQueryParamsPresent) {
        paramsObj = this.addQueryParamsToEndPoint(options['queryParams']);
      }

      if(isHeadersPresent) {
        headers = this.addHeadersToRequest(options['headers']);
      }

      // console.log("Headers in the request ", headers);
      // console.log("Params in the request ", paramsObj);
      // console.log("Final endpoint of the request ", endpoint);

      return this.http.get(baseUrl + endpoint, {
        headers: isHeadersPresent ? headers : null,
        params: isQueryParamsPresent ? paramsObj : null
      })

    } else {
      console.log("Api endpoint should not be null or undefined !");
      return of(null);
    }

  }

  getApiEndPoint(endpoint: string) : string | null {
    if(!isNullOrUndefined(endpoint) && endpoint !== '' && WEATHER_APP_CONSTANTS.API_MAPPING[endpoint] !== null) {
      return WEATHER_APP_CONSTANTS.API_MAPPING[endpoint]
    } else {
      return null;
    }
  }

  addQueryParamsToEndPoint(queryParams: any) : HttpParams {
    let params: HttpParams = new HttpParams();

    for(let key in queryParams) {
      let value = queryParams[key];
      params.set(key, value);
    }

    return params;
  }

  addOptionsToEndPoint(apiEndPoint: string, options: any) : string {
    let values = Object.values(options);

    values.forEach((value: string) => {
       apiEndPoint += `/${value}`
    })

    return apiEndPoint;
  }
  
  addHeadersToRequest(headers: any) : HttpHeaders {
    let header: HttpHeaders = new HttpHeaders();

    for(let key in headers) {
      let value = headers[key];
      header.set(key, value);
    }

    return headers;
  }

}