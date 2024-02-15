import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseAndMedicalInfoComponent } from './disease-and-medical-info.component';

describe('DiseaseAndMedicalInfoComponent', () => {
  let component: DiseaseAndMedicalInfoComponent;
  let fixture: ComponentFixture<DiseaseAndMedicalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiseaseAndMedicalInfoComponent]
    });
    fixture = TestBed.createComponent(DiseaseAndMedicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
