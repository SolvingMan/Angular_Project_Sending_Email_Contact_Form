import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './loading/loading.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { SignupModule } from './signup/signup.module';


@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    LoginModule,
    RegisterModule,
    SignupModule,
    ForgotPasswordModule,
    // AuthenticatedpageModule
  ],
  declarations: []
})
export class AuthModule { }
