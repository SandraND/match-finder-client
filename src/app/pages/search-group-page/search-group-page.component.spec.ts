import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupPageComponent } from './search-group-page.component';

describe('SearchGroupPageComponent', () => {
  let component: SearchGroupPageComponent;
  let fixture: ComponentFixture<SearchGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
