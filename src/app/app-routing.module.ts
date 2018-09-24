// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { LoadingComponent } from './pages/auth/loading/loading.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { AuthenticatedpageComponent } from './pages/authenticatedpage/authenticatedpage.component'; 

const routes: Routes = [
  {path: '', component: LoadingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'register/detail', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'authenticatedpage', component: AuthenticatedpageComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
