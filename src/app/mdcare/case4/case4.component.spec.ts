import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case4Component } from './case4.component';

describe('Case4Component', () => {
  let component: Case4Component;
  let fixture: ComponentFixture<Case4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
