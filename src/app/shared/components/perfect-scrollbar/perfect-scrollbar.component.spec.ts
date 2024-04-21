import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectScrollbarComponent } from './perfect-scrollbar.component';

describe('PerfectScrollbarComponent', () => {
  let component: PerfectScrollbarComponent;
  let fixture: ComponentFixture<PerfectScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfectScrollbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfectScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
