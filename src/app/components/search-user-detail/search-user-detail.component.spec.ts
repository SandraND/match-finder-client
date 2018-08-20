import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserDetailComponent } from './search-user-detail.component';

describe('SearchUserDetailComponent', () => {
  let component: SearchUserDetailComponent;
  let fixture: ComponentFixture<SearchUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
