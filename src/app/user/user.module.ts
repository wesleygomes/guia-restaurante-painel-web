import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './../services/auth.service';

import { PasswordComponent } from "./password.component";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

const appRoutes: Routes = [
  { path: 'password', component: PasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  declarations: [
    PasswordComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent
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
