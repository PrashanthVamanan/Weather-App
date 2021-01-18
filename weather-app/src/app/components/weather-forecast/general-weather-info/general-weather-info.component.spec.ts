import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWeatherInfoComponent } from './general-weather-info.component';

describe('GeneralWeatherInfoComponent', () => {
  let component: GeneralWeatherInfoComponent;
  let fixture: ComponentFixture<GeneralWeatherInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralWeatherInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
