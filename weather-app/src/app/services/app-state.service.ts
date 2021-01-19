import { Injectable } from "@angular/core";

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppStateService {
  statesList: any[] = [];
  statesListRef = new Subject<any>();

  setStatesList(value: any[]) {
    this.statesList = value;
    this.statesListRef.next(this.statesList);
  }

  getStatesList(): any[] {
    return this.statesList;
  }

  citiesList: any[] = [];
  citiesListRef = new Subject<any>();

  setCitiesList(value: any[]) {
    this.citiesList = value;
    this.citiesListRef.next(this.citiesList);
  }

  getCitiesList(): any[] {
    return this.citiesList;
  }

  selectedGeoLocation: string = null;
  selectedGeoLocationRef = new Subject<string>();

  setSelectedGeoLocation(value : string) {
    this.selectedGeoLocation = value;
    this.selectedGeoLocationRef.next(this.selectedGeoLocation);
  }

  getSelectedGeoLocation() : string {
    return this.selectedGeoLocation;
  }
}