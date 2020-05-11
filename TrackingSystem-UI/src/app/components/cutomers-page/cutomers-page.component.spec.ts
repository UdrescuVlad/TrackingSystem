import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersPageComponent } from './cutomers-page.component';

describe('CutomersPageComponent', () => {
  let component: CutomersPageComponent;
  let fixture: ComponentFixture<CutomersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
