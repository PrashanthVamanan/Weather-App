import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-left-panel-body',
  templateUrl: './left-panel-body.component.html',
  styleUrls: ['./left-panel-body.component.scss']
})
export class LeftPanelBodyComponent implements OnInit, OnDestroy {

  @Input('countriesList') countriesList: Country[];

  @Output() countryWasSelected = new EventEmitter<string>();
  @Output() stateWasSelected = new EventEmitter<string>();
  
  statesList: any[];
  citiesList: any[];

  selectedCountry: string = null;
  selectedState: string = null;
  selectedCity: string = null;

  subscriptions: Subscription[] = [];

  constructor(private appStateSrv: AppStateService) { }

  ngOnInit() { 
    const statesListRef = this.appStateSrv.statesListRef.subscribe((value: any[]) => {
      this.statesList = value;
    })

    const citiesListRef = this.appStateSrv.citiesListRef.subscribe((value : any[]) => {
      this.citiesList = value;
    })

    this.subscriptions.push(statesListRef);
    this.subscriptions.push(citiesListRef);
  }

  onCountrySelected() {
    this.countryWasSelected.emit(this.selectedCountry);
  }

  onStateSelected() {
    this.stateWasSelected.emit(this.selectedState);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
