import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCalculationComponent } from './flow-calculation.component';

describe('FlowCalculationComponent', () => {
  let component: FlowCalculationComponent;
  let fixture: ComponentFixture<FlowCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
