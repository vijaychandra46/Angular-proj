import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcareComponent } from './mdcare.component';

describe('MdcareComponent', () => {
  let component: MdcareComponent;
  let fixture: ComponentFixture<MdcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
