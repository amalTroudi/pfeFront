import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewerTemplateComponent } from './example-viewer-template.component';

describe('ExampleViewerTemplateComponent', () => {
  let component: ExampleViewerTemplateComponent;
  let fixture: ComponentFixture<ExampleViewerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleViewerTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleViewerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
