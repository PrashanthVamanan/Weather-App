import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWeatherStatsComponent } from './other-weather-stats.component';

describe('OtherWeatherStatsComponent', () => {
  let component: OtherWeatherStatsComponent;
  let fixture: ComponentFixture<OtherWeatherStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherWeatherStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWeatherStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
