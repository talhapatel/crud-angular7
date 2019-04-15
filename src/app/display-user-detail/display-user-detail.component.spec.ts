import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserDetailComponent } from './display-user-detail.component';

describe('DisplayUserDetailComponent', () => {
  let component: DisplayUserDetailComponent;
  let fixture: ComponentFixture<DisplayUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
