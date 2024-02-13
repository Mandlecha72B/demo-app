import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportformatsComponent } from './exportformats.component';

describe('ExportformatsComponent', () => {
  let component: ExportformatsComponent;
  let fixture: ComponentFixture<ExportformatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportformatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportformatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
