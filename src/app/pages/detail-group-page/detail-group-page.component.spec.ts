import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroupPageComponent } from './detail-group-page.component';

describe('DetailGroupPageComponent', () => {
  let component: DetailGroupPageComponent;
  let fixture: ComponentFixture<DetailGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
