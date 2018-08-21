import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedGameCardComponent } from './applied-game-card.component';

describe('AppliedGameCardComponent', () => {
  let component: AppliedGameCardComponent;
  let fixture: ComponentFixture<AppliedGameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedGameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
