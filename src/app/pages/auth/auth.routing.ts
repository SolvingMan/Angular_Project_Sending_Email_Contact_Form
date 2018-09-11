import { Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticatedpageComponent } from '../authenticatedpage/authenticatedpage.component';
const flag=true;
export const authRoutes: Routes = [
  {
    path: '',
    component: LoadingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'authenticatedpage',
    component: AuthenticatedpageComponent
  }
];
