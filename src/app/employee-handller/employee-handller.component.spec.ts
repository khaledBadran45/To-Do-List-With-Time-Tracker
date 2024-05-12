import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHandllerComponent } from './employee-handller.component';

describe('EmployeeHandllerComponent', () => {
  let component: EmployeeHandllerComponent;
  let fixture: ComponentFixture<EmployeeHandllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHandllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHandllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
