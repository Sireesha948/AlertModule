import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapPostingsComponent } from './sap-postings.component';

describe('SapPostingsComponent', () => {
  let component: SapPostingsComponent;
  let fixture: ComponentFixture<SapPostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapPostingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SapPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
