import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
