import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/components/layouts/blank/blank.component';
import { FullComponent } from './shared/components/layouts/full/full.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,
    loadChildren: () =>
        import("./modules/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
