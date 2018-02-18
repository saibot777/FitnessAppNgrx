import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "angularfire2/auth";
import {UiService} from "./shared/ui.service";
import {AuthModule} from "./auth/auth.module";
import {TrainingModule} from "./training/training.module";
import {StopTrainingComponent} from "./training/current-training/stop-training.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialModule,
    AuthModule,
    AppRoutingModule,
    FlexLayoutModule,
    TrainingModule
  ],
  providers: [AuthService, TrainingService, UiService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
