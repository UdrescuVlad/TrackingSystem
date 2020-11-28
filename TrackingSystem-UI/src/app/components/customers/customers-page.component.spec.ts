import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPageComponent } from './customers-page.component';

describe('CutomersPageComponent', () => {
  let component: CustomersPageComponent;
  let fixture: ComponentFixture<CustomersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
