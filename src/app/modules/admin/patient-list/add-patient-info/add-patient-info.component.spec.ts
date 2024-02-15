import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientInfoComponent } from './add-patient-info.component';

describe('AddPatientInfoComponent', () => {
  let component: AddPatientInfoComponent;
  let fixture: ComponentFixture<AddPatientInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPatientInfoComponent]
    });
    fixture = TestBed.createComponent(AddPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
