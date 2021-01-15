import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LeftPanelComponent } from './components/landing-page/left-panel/left-panel.component';
import { RightPanelComponent } from './components/landing-page/right-panel/right-panel.component';
import { LeftPanelBodyComponent } from './components/landing-page/left-panel/left-panel-body/left-panel-body.component';
import { LandingPageHeaderComponent } from './components/landing-page/landing-page-header/landing-page-header.component';
import { RightPanelBodyComponent } from './components/landing-page/right-panel/right-panel-body/right-panel-body.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LeftPanelBodyComponent,
    LandingPageHeaderComponent,
    RightPanelBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
