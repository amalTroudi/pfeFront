import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatxNotifications2Component } from './matx-notifications2.component';

describe('MatxNotifications2Component', () => {
  let component: MatxNotifications2Component;
  let fixture: ComponentFixture<MatxNotifications2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatxNotifications2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatxNotifications2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
