import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';


const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'forecast', component: WeatherForecastComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
