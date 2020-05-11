import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCustomerComponent } from './specific-customer.component';

describe('SpecificCustomerComponent', () => {
  let component: SpecificCustomerComponent;
  let fixture: ComponentFixture<SpecificCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
