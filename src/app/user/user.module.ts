import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PasswordComponent } from "./password.component";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { RegisterComponent } from './register.component';

import { AuthService } from './../services/auth.service';

const appRoutes: Routes = [
  { path: 'password', component: PasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    PasswordComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ]
})

export class UserModule { }
