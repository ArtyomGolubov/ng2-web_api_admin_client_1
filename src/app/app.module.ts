import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersListComponent } from './users-list/users-list.component';

import { HttpService } from './http.service';
import { AccountService } from './account.service';
import { AlertComponent } from './alert/alert.component';

const APP_ROUTES: Routes = [
    {path: 'users', component: UsersListComponent },
    {path: 'registration', component: RegistrationComponent },
    {path: 'changepassword', component: ChangePasswordComponent },
    {path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ChangePasswordComponent,
    UsersListComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
