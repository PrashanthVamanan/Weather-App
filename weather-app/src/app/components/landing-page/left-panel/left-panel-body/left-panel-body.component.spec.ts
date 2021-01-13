import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelBodyComponent } from './left-panel-body.component';

describe('LeftPanelBodyComponent', () => {
  let component: LeftPanelBodyComponent;
  let fixture: ComponentFixture<LeftPanelBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
