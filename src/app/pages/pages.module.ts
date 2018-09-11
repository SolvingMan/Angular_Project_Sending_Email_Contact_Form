import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { AuthenticatedpageModule } from './authenticatedpage/authenticatedpage.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    AuthenticatedpageModule
  ],
  declarations: []
})
export class PagesModule { }
