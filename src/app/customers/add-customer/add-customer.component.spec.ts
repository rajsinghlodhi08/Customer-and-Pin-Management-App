import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerOverlayComponent } from './add-customer.component';

describe('AddCustomerOverlayComponent', () => {
  let component: AddCustomerOverlayComponent;
  let fixture: ComponentFixture<AddCustomerOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomerOverlayComponent]
    });
    fixture = TestBed.createComponent(AddCustomerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
