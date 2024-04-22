import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputOverComponent } from './search-input-over.component';

describe('SearchInputOverComponent', () => {
  let component: SearchInputOverComponent;
  let fixture: ComponentFixture<SearchInputOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputOverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInputOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
