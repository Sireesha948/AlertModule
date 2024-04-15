import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarianceReviewComponent } from './variance-review.component';

describe('VarianceReviewComponent', () => {
  let component: VarianceReviewComponent;
  let fixture: ComponentFixture<VarianceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VarianceReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VarianceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
