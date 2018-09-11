import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedpageComponent } from './authenticatedpage.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [AuthenticatedpageComponent]
})
export class AuthenticatedpageModule { }
