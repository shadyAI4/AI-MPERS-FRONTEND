import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent,
    },
    {
        path: 'doctor-profile',
        component: DoctorProfileComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
