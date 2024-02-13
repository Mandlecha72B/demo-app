import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExelogComponent } from './exelog.component';

describe('ExelogComponent', () => {
  let component: ExelogComponent;
  let fixture: ComponentFixture<ExelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExelogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
