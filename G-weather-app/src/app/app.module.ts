import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = ([] = [
  {
    path: '',
    component: LandingPageComponent,
    // pathMatch: 'full',
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
  },
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    NavbarComponent,
    DashboardComponent,
    WeatherListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
