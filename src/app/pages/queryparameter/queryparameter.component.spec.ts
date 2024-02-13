import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparameterComponent } from './queryparameter.component';

describe('QueryparameterComponent', () => {
  let component: QueryparameterComponent;
  let fixture: ComponentFixture<QueryparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryparameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
