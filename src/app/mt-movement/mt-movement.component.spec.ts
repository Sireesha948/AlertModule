import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtMovementComponent } from './mt-movement.component';

describe('MtMovementComponent', () => {
  let component: MtMovementComponent;
  let fixture: ComponentFixture<MtMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtMovementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MtMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
