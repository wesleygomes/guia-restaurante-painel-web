import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppHttpService } from './services/app-http.service';
import { HttpModule } from '@angular/http';

import { UserModule } from "./user/user.module";
import { RestaurantsModule } from "./restaurants/restaurants.module";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    HttpModule,
    RestaurantsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
