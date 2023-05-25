import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionReportComponent } from './consumption-report.component';

describe('ConsumptionReportComponent', () => {
  let component: ConsumptionReportComponent;
  let fixture: ComponentFixture<ConsumptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
