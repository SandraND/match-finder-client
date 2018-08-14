import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesPageComponent } from './list-games-page.component';

describe('ListGamesPageComponent', () => {
  let component: ListGamesPageComponent;
  let fixture: ComponentFixture<ListGamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
