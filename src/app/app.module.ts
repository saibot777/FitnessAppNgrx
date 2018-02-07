import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CurrentTrainingComponent } from './layout/current-training/current-training.component';
import { NewTrainingComponent } from './layout/new-training/new-training.component';
import { PastTrainingComponent } from './layout/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from "./app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LayoutComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }