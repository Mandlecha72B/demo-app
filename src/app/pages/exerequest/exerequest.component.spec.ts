import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerequestComponent } from './exerequest.component';

describe('ExerequestComponent', () => {
  let component: ExerequestComponent;
  let fixture: ComponentFixture<ExerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
