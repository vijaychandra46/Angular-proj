import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShprofileComponent } from './shprofile.component';

describe('ShprofileComponent', () => {
  let component: ShprofileComponent;
  let fixture: ComponentFixture<ShprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
