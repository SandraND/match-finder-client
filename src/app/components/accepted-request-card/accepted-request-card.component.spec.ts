import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequestCardComponent } from './accepted-request-card.component';

describe('AcceptedRequestCardComponent', () => {
  let component: AcceptedRequestCardComponent;
  let fixture: ComponentFixture<AcceptedRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
