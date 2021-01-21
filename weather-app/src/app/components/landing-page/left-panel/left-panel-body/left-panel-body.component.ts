import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { AppStateService } from 'src/app/services/app-state.service';
import { WEATHER_APP_CONSTANTS } from 'src/app/constants/proj.cnst';

@Component({
  selector: 'app-left-panel-body',
  templateUrl: './left-panel-body.component.html',
  styleUrls: ['./left-panel-body.component.scss']
})
export class LeftPanelBodyComponent implements OnInit, OnDestroy {

  @Input('countriesList') countriesList: Country[];

  @Output() countryWasSelected = new EventEmitter<string>();
  @Output() stateWasSelected = new EventEmitter<string>();
  @Output() cityWasSelected = new EventEmitter<any>();
  @Output() searchButtonWasClicked = new EventEmitter<any>();
  
  statesList: any[];
  citiesList: any[];

  selectedCountry: string = null;
  selectedState: string = null;
  selectedCity: string = null;

  isDataLoaded: any = {};
  useMockData: boolean;

  subscriptions: Subscription[] = [];

  constructor(private appStateSrv: AppStateService) { }

  ngOnInit() { 

    this.useMockData = WEATHER_APP_CONSTANTS.USE_MOCK_DATA;

    this.isDataLoaded = {
      'country': this.countriesList.length > 0 ? false : true,
      'state': false,
      'city': false
    }

    const statesListRef = this.appStateSrv.statesListRef.subscribe((value: any[]) => {
      this.statesList = value;
      this.isDataLoaded.state = false;
    })

    const citiesListRef = this.appStateSrv.citiesListRef.subscribe((value : any[]) => {
      this.citiesList = value;
      this.isDataLoaded.city = false;
    })

    this.subscriptions.push(statesListRef);
    this.subscriptions.push(citiesListRef);
  }

  ngOnChanges() {
    if(this.countriesList.length > 0 && this.isDataLoaded.country) {
      this.isDataLoaded.country = false;
    }
  }

  onCountrySelected() {
    this.isDataLoaded.state = true;
    this.countryWasSelected.emit(this.selectedCountry);
  }

  onStateSelected() {
    this.isDataLoaded.city = true;
    this.stateWasSelected.emit(this.selectedState);
  }

  onCitySelected() {

    let geoInfo = {
      country: this.selectedCountry,
      state: this.selectedState,
      city: this.selectedCity
     }

    // console.log("Geo Info", geoInfo); 

    this.cityWasSelected.emit(geoInfo);
  }

  onSearchButtonClicked() {
    this.searchButtonWasClicked.emit();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
