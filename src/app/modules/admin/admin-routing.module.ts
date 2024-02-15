import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientInfoComponent } from './patient-list/patient-info/patient-info.component';
import { DiseaseAndMedicalInfoComponent } from './patient-list/patient-info/disease-and-medical-info/disease-and-medical-info.component';


const routes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
  },
  {
    path: 'doctor-list',
    component: DoctorListComponent,
  },
  {
    path: 'patient-list',
    component: PatientListComponent,
  },
  {
    path: 'patient-list/:uid',
    component: PatientInfoComponent,
  },
  {
    path: 'diseas-info/:uidm',
    component: DiseaseAndMedicalInfoComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
