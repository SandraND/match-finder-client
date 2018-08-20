import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGroupDetailComponent } from './search-group-detail.component';

describe('SearchGroupDetailComponent', () => {
  let component: SearchGroupDetailComponent;
  let fixture: ComponentFixture<SearchGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
