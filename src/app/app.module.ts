import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Contract } from './contracts/contract';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { ClickOutsideModule } from 'ng-click-outside';
import { ContractsRoutingModule } from './contracts/contracts-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    ContractsRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClickOutsideModule,
    MatIconModule,
    MatSortModule,
    ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
