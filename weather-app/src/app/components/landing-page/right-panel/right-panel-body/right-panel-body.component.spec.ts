import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelBodyComponent } from './right-panel-body.component';

describe('RightPanelBodyComponent', () => {
  let component: RightPanelBodyComponent;
  let fixture: ComponentFixture<RightPanelBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightPanelBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPanelBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
