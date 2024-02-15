import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module'
import { MaterialModule } from 'src/app/material.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInfoComponent } from './patient-list/patient-info/patient-info.component';
import { DiseaseAndMedicalInfoComponent } from './patient-list/patient-info/disease-and-medical-info/disease-and-medical-info.component';
import { AddPatientInfoComponent } from './patient-list/add-patient-info/add-patient-info.component';
import { AddDoctorComponent } from './doctor-list/add-doctor/add-doctor.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DoctorListComponent,
    PatientListComponent,
    PatientInfoComponent,
    DiseaseAndMedicalInfoComponent,
    AddPatientInfoComponent,
    AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    AppDashboardComponent,
  ],
  exports: [
    MaterialModule,
    SharedModule,
  ]
})
export class AdminModule { }
