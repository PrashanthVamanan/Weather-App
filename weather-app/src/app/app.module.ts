import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LeftPanelComponent } from './components/landing-page/left-panel/left-panel.component';
import { RightPanelComponent } from './components/landing-page/right-panel/right-panel.component';
import { LeftPanelBodyComponent } from './components/landing-page/left-panel/left-panel-body/left-panel-body.component';
import { LandingPageHeaderComponent } from './components/landing-page/landing-page-header/landing-page-header.component';
import { RightPanelBodyComponent } from './components/landing-page/right-panel/right-panel-body/right-panel-body.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { GeneralWeatherInfoComponent } from './components/weather-forecast/general-weather-info/general-weather-info.component';
import { WEATHER_APP_CONSTANTS } from './constants/proj.cnst';
import { OtherWeatherStatsComponent } from './components/weather-forecast/other-weather-stats/other-weather-stats.component';
import { PastDaysForecastComponent } from './components/weather-forecast/past-days-forecast/past-days-forecast.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LeftPanelBodyComponent,
    LandingPageHeaderComponent,
    RightPanelBodyComponent,
    WeatherForecastComponent,
    GeneralWeatherInfoComponent,
    OtherWeatherStatsComponent,
    PastDaysForecastComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    NgCircleProgressModule.forRoot(WEATHER_APP_CONSTANTS.NG_CIRCLE_PROGRESS_OPTIONS),
    NgxSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
