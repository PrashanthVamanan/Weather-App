import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDaysForecastComponent } from './past-days-forecast.component';

describe('PastDaysForecastComponent', () => {
  let component: PastDaysForecastComponent;
  let fixture: ComponentFixture<PastDaysForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastDaysForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
