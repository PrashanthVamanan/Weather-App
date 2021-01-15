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

  getStatesList() {
    return this.statesList;
  }

  citiesList: any[] = [];
  citiesListRef = new Subject<any>();

  setCitiesList(value: any[]) {
    this.citiesList = value;
    this.citiesListRef.next(this.citiesList);
  }

  getCitiesList() {
    return this.citiesList;
  }
}