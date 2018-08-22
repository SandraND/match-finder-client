import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListAllComponent } from './friend-list-all.component';

describe('FriendListAllComponent', () => {
  let component: FriendListAllComponent;
  let fixture: ComponentFixture<FriendListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
