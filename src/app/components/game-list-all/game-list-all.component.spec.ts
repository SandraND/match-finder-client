import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListAllComponent } from './game-list-all.component';

describe('GameListAllComponent', () => {
  let component: GameListAllComponent;
  let fixture: ComponentFixture<GameListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
