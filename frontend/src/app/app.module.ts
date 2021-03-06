import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule} from "@angular/common/http";
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule} from "@angular/forms";
import {TicketInfoFieldComponent} from "./ticket/ticket-info-field/ticket-info-field.component";
import {CustomHttpInterceptor} from "./interceptors/http-interceptor";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    OverviewComponent,
    TicketFormComponent,
    TicketInfoFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatInputModule,
    MatGridListModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule,
    MatStepperModule,
    FormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
