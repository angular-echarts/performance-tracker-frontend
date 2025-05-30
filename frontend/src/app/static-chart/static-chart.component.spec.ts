import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticChartComponent } from './static-chart.component';

describe('StaticChartComponent', () => {
  let component: StaticChartComponent;
  let fixture: ComponentFixture<StaticChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
