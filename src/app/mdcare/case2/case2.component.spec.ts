import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case2Component } from './case2.component';

describe('Case2Component', () => {
  let component: Case2Component;
  let fixture: ComponentFixture<Case2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
