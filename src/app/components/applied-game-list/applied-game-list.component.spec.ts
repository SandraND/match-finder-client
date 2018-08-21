import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedGameListComponent } from './applied-game-list.component';

describe('AppliedGameListComponent', () => {
  let component: AppliedGameListComponent;
  let fixture: ComponentFixture<AppliedGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
