import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatxSidebarComponent } from './matx-sidebar.component';

describe('MatxSidebarComponent', () => {
  let component: MatxSidebarComponent;
  let fixture: ComponentFixture<MatxSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatxSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatxSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
